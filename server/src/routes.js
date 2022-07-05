const express = require('express');

const authController = require('./controllers/authController.js');
const lessonController = require('./controllers/lessonController.js');

const router = express.Router();

router.use('/auth', authController);
router.use('/lesson', lessonController);
router.get('*', (req, res) => {
    res.status(404).json({message: 'Not found!'});
});

module.exports = router;