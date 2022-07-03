const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLenght: 3,
        maxLenght: 30
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
    likes: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    lessons: [{
        type: mongoose.Types.ObjectId,
        ref: 'Lesson'
    }]
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;