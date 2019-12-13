const mongoose = require('mongoose');

var Db2 = mongoose.model('Db2', {
    question: { type: String },
    answer1: {type: String },
    answer2: {type: String },
    answer3: {type: String },
    correctanswer: {type: String }
});

module.exports = { Db2 };