const Course = require('../models/Course.js');

exports.getAll = () => Course.find();
exports.create = (data) => Course.create(data);
exports.getOne = (id) => Course.findById(id);
exports.updateById = (id, data) => Course.findOneAndUpdate({_id: id}, data, { runValidators: true });
exports.deleteById = (id) => Course.findOneAndDelete(id);