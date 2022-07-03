const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User.js');


const blacklist = new Set();

const {SECRET, SAULT_ROUNDS} = require('../config/env.js');

exports.register = async (data) => {
    data['kbpoints'] = 0;
    const {email, password} = data;

    const existing = await User.findOne({ email });

    if (existing) {
        throw new Error('Email is taken');
    }

    const hashedPassword = await bcrypt.hash(password, SAULT_ROUNDS);
    data['password'] = hashedPassword;
    
    const user = new User(data);

    await user.save();

    return createSession(user);
}

function createSession(user) {
    const payload = {
        username: user.username,
        email: user.email,
        _id: user._id
    };

    const accessToken = jwt.sign(payload, SECRET);

    return {
        email: user.email,
        username: user.username,
        kbpoints: user.kbpoints,
        accessToken,
        _id: user._id
    };
}