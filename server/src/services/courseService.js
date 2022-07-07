const Course = require('../models/Course.js');

exports.getAll = () => Course.find();
exports.create = (data) => Course.create(data);