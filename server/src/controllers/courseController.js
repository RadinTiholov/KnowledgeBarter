const router = require('express').Router();
const courseService = require('../services/courseService.js');

router.get('/all', async  (req, res) => {
    const courses = await courseService.getAll().lean();
    res.json(courses);
})

module.exports = router;