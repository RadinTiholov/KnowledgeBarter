const Lesson = require('../models/Lesson.js');

exports.getAll = () => Lesson.find();
exports.create = (data) => Lesson.create(data);
exports.getOne = (id) => Lesson.findById(id);
exports.updateById = (id, data) => Lesson.findOneAndUpdate({_id: id}, data, { runValidators: true });