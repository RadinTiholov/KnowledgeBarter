const { validateToken } = require('../services/authService.js');


exports.auth = () => (req, res, next) => {
    const token = req.headers['x-authorization'];

    if (token) {
        try {
            const payload = validateToken(token);
            req.user = {
                email: payload.email,
                _id: payload._id,
                token
            };
        } catch (err) {
            console.error(err);
            return res.status(401).json({ message: 'Invalid access token. Please log in'});
        }
    }

    next();
};

exports.isAuth = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.status(401).json({ message: 'Please log in' });
    }
}

exports.isGuest = (req, res, next) => {
    if (!req.user) {
        next();
    } else {
        res.status(401).json({ message: 'Please log out' });
    }
}