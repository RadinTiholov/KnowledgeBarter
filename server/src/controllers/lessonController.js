const router = require('express').Router();

const lessonService = require('../services/lessonService.js');
const { isAuth, isGuest } = require('../middlewares/authMiddleware.js');

router.get('/popular', async (req, res) => {
    const mostPopular = await lessonService.getMostPopular();
    res.json(mostPopular);
})

router.get('/all', async (req, res) => {
    const allLessons = await lessonService.getAll().lean();
    res.json(allLessons);
})

router.post('/all', isAuth, async (req, res) => {
    try {
        const data = req.body;
        const result = await lessonService.create(data, req.user._id);

        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.get('/details/:id', async (req, res) => {
    try {
        await lessonService.incrementViews(req.params.id);

        const lesson = await lessonService.getOne(req.params.id).populate('comments').lean();
        res.json(lesson);
    } catch (error) {
        res.status(400).json({ message: "Bad request" })
    }
})

router.put('/edit/:id', isAuth, async (req, res) => {
    try {
        const result = await lessonService.edit(req.body, req.params.id, req.user._id);
        
        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/delete/:id', isAuth, async (req, res) => {
    try {
        const result = await lessonService.delete(req.params.id, req.user._id);

        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/like/:id', isAuth, async (req, res) => {
    try {
        const result = await lessonService.like(req.params.id, req.user._id);

        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/buy/:id', isAuth, async (req, res) => {
    try {
        const result = await lessonService.buy(req.params.id, req.user._id);

        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.post('/comment/:id', isAuth, async (req, res) => {
    try {
        const comment = await lessonService.comment(req.params.id, req.user._id, req.body);

        res.json(comment);
        // const lesson = await lessonService.getOne(req.params.id).lean();
        // const user = await userService.getUser(req.user._id).lean();
        // if (lesson) {
        //     const commentData = req.body;
        //     commentData['owner'] = user._id;
        //     commentData['lesson'] = lesson._id;
        //     const comment = await commentService.comment(commentData);

        //     const lessonRaw = await lessonService.getOne(req.params.id);
        //     lessonRaw.comments.push(comment);
        //     lessonRaw.save();

        //     res.json(comment);
        // } else {
        //     throw new Error("Not found");
        // }
    } catch (error) {
        res.status(400).json({ message: "Bad request" })
    }
})


module.exports = router;