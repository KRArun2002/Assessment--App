const mongoose = require('mongoose');

var Db1 = mongoose.model('Db1', {
    question: { type: String },
    answer1: {type: String },
    answer2: {type: String },
    answer3: {type: String },
    correctanswer: {type: String }
});

module.exports = { Db1 };