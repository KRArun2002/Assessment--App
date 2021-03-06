const express = require('express');
var router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId;
var { Test } = require('../models/test');

// => localhost:3000/tests/

router.get('/', (req,res) => {
    Test.find((err,docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retreiving :' + JSON.stringify(err,undefined,2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Test.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/',(req,res) => {
    var tst = new Test({
        question: req.body.question,
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        answer3: req.body.answer3,
        correctanswer: req.body.correctanswer
    });
    tst.save((err, doc) => {
        if (!err) { res.send(doc);}
        else { console.log('Error in save:' + JSON.stringify(err,undefined,2));}
    });
});

router.put('/:id',(req,res) =>{
    if(!ObjectID.isValid(req.params.id))
       return res.status(400).send(`No record with given id: ${req.params.id}`);

    var tst = {
        question: req.body.question,
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        answer3: req.body.answer3,
        correctanswer: req.body.correctanswer
    };
    Test.findByIdAndUpdate(req.params.id, { $set: tst }, { new: true }, (err,doc) => {
        if (!err) { res.send(doc);}
        else { console.log('error in update:' + JSON.stringify(err,undefined,2));}

    });
});

router.delete('/:id',(req,res) => {
    console.log(req);
    if(!ObjectID.isValid(req.params.id))
       return res.status(400).send(`No record with given id: ${req.params.id}`);

       Test.findByIdAndRemove(req.params.id, (err,doc) => {
        if (!err) { res.send(doc);}
        else { console.log('error in delete:' + JSON.stringify(err,undefined,2));}

    });
});


module.exports = router;