const router = require('express').Router();

const authService = require('../services/authService.js');
const { isAuth, isGuest } = require('../middlewares/authMiddleware.js');

router.post('/login', isGuest, async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await authService.login(email, password);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})
router.post('/register', isGuest, async (req, res) => {
    try {
        const result = await authService.register(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.get('/logout',isAuth, (req, res) => {
    authService.logout(req.user.token);
    res.status(204).end();
})

module.exports = router;