const router = require('express').Router();

const commentService =  require('../services/commentService.js');

router.get('/all', async  (req, res) => {
    const comments = await commentService.getAll().lean();
    res.json(comments);
})

module.exports = router;