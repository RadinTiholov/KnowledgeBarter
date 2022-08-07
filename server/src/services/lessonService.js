const Lesson = require('../models/Lesson.js');

exports.getAll = () => Lesson.find();
exports.create = (data) => Lesson.create(data);
exports.getOne = (id) => Lesson.findById(id);
exports.updateById = (id, data) => Lesson.findOneAndUpdate({_id: id}, data, { runValidators: true });
exports.deleteById = (id) => Lesson.deleteOne({_id: id});
exports.likeById = (id, data) => {
    data.likes += 1;
    return Lesson.findOneAndUpdate({_id: id}, data, { runValidators: true })
}