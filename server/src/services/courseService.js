const Course = require('../models/Course.js');

exports.getAll = () => Course.find();