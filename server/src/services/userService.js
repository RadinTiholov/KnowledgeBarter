const User = require('../models/User.js');

exports.updateKBPoints = (id, points) => User.findByIdAndUpdate(id, points)
exports.getOwner = (id) => User.findById(id);