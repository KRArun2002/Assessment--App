const mongoose = require('mongoose');

var Test = mongoose.model('Test', {
    question: { type: String },
    answer1: {type: String },
    answer2: {type: String },
    answer3: {type: String },
    correctanswer: {type: String }
});

module.exports = { Test };