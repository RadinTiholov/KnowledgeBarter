const Comment = require('../models/Comment');

exports.comment = (comment) => Comment.create(comment);
exports.getAll = () => Comment.find();