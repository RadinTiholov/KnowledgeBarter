const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    lesson: {
        type: mongoose.Types.ObjectId,
        ref: 'Lesson' 
    }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;