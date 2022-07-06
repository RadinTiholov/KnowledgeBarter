const User = require('../models/User.js');

exports.updateKBPoints = (id, points) => User.findByIdAndUpdate(id, points)
exports.getUser = (id) => User.findById(id);