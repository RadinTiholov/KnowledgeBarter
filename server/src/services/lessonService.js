const Lesson = require('../models/Lesson.js');

exports.getAll = () => Lesson.find();
exports.create = (data) => Lesson.create(data);