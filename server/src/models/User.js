const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function() {
                var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return re.test(this.email);
            },
            message: 'Provided email is invalid.'
        }
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 30
    },
    password: {
        type: String,
        required: true
    },
    kbpoints: {
        type: Number,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    ownLessons: [{
        type: mongoose.Types.ObjectId,
        ref: 'Lesson'
    }],
    ownCourses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    }],
    boughtLessons: [{
        type: mongoose.Types.ObjectId,
        ref: 'Lesson'
    }],
    boughtCourses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    }],
    likedLessons: [{
        type: mongoose.Types.ObjectId,
        ref: 'Lesson'
    }],
    likedCourses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;