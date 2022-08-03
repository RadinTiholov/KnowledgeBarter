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
        throw new Error('Email or Username is taken');
    }

    const hashedPassword = await bcrypt.hash(password, SAULT_ROUNDS);
    data['password'] = hashedPassword;

    const user = new User(data);

    await user.save();
    return createSession(user);
}
exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Incorrect email or password');
    }

    // verify password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error('Incorrect email or password');
    }

    return createSession(user);
} 
exports.validateToken = (token) => {
    if (blacklist.has(token)) {
        throw new Error('Token is blacklisted');
    }
    return jwt.verify(token, SECRET);
}

exports.logout = (token) => {
    blacklist.add(token);
}

function createSession(user) {
    const payload = {
        username: user.username,
        email: user.email,
        kbpoints: user.kbpoints,
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