const express = require('express');

const authController = require('./controllers/authController.js');

const router = express.Router();

router.use('/auth', authController);
router.get('*', (req, res) => {
    res.status(404).json({message: 'Not found!'});
});

module.exports = router;