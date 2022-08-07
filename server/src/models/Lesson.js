const mongoose = require('mongoose');
const User = require('./User');

const lessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 20
    },
    description: {
        type: String,
        required: true,
        minLenght: 10,
        maxLenght: 60
    },
    tumbnail: {
        type: String,
        required: true,
    },
    article: {
        type: String,
        required: true,
        minLenght: 50,
        maxLenght: 1000
    },
    video: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    tags: [{
        type: String
    }],
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    resources: {
        type: String
    }
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;