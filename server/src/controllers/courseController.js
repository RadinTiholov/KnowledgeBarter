const router = require('express').Router();

const courseService = require('../services/courseService.js');
const userService = require('../services/userService.js');
const { isAuth, isGuest } = require('../middlewares/authMiddleware.js');

router.get('/highest', async (req, res) => {
    const highestRatedCourses = await courseService.getHighestRated();

    res.json(highestRatedCourses);
})
router.get('/all', async  (req, res) => {
    const courses = await courseService.getAll().lean();
    res.json(courses);
})

router.post('/all', isAuth, async (req, res) => {
    try{
        const result = await courseService.create(req.body, req.user._id);

        res.json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
})

router.get('/details/:id', async (req, res) => {
    try{
        const course = await courseService.getOne(req.params.id).populate('lessons').lean();
        res.json(course);

    }catch(error){
        res.status(400).json({message: error.message});
    }
})

router.put('/edit/:id', isAuth, async (req, res) => {
    try{
        const result = await courseService.edit(req.params.id, req.user._id, req.body);

        res.json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
})

router.delete('/delete/:id', isAuth, async (req, res) => {
    try{
        const result = await courseService.delete(req.params.id, req.user._id);

        res.json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
})

router.get('/like/:id', isAuth, async (req, res) => {
    try{
        const result = await courseService.like(req.params.id, req.user._id);

        res.json(result);
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

router.get('/buy/:id', isAuth, async (req, res) => {
    try{
        const result = await courseService.buy(req.params.id, req.user._id);

        res.json(result);
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router;