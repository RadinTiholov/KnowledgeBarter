const router = require('express').Router();

const { USER_COOKIE_NAME } = require('../config/env.js');
const authService = require('../services/authService.js');

router.post('/login', async (req, res) => {
    
})
router.post('/register', async (req, res) => {
    try {
        const result = await authService.register(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.get('/logout', (req, res) => {

})

module.exports = router;