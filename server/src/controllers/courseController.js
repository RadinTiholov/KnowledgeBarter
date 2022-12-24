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
        const course = await courseService.getOne(req.params.id).lean();
        if(course.owner == req.user._id){
            await courseService.updateById(req.params.id, req.body);
            res.json("Successfully updated");
        }else{
            throw new Error("Unauthorized to do this action");
        }
    }catch(error){
        res.status(400).json({message: error.message});
    }
})

router.delete('/delete/:id', isAuth, async (req, res) => {
    try{
        const course = await courseService.getOne(req.params.id).lean();
        if(course){
            if(course.owner == req.user._id){
                await courseService.deleteById(req.params.id);
                res.json("Successfully deleted");
            }else{
                throw new Error("Unauthorized to do this action");
            }
        }else{
            throw new Error("Not found"); 
        }
    }catch(error){
        res.status(400).json({message: error.message});
    }
})

router.get('/like/:id', isAuth, async (req, res) => {
    try{
        const course = await courseService.getOne(req.params.id).lean();
        const user = await userService.getUser(req.user._id).lean();
        if(course){
            if(course.owner == req.user._id || user.likedCourses.some(x => x == req.params.id)){
                throw new Error("Unauthorized to do this action");
            }else{
                await courseService.likeById(req.params.id, course);
                const userRaw = await userService.getUser(req.user._id);
                userRaw.likedCourses.push(req.params.id);
                userRaw.save();

                res.json("Successfully liked");
            }
        }else{
            throw new Error("Not found");
        }
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

router.get('/buy/:id', isAuth, async (req, res) => {
    try{
        const course = await courseService.getOne(req.params.id).lean();
        const user = await userService.getUser(req.user._id).lean();
        if(course){
            if(course.owner == req.user._id || user.boughtCourses.some(x => x == req.params.id)){
                throw new Error("Unauthorized to do this action");
            }else{
                if(user.kbpoints >= course.price){
                    const userRaw = await userService.getUser(req.user._id);
                    userRaw.boughtCourses.push(req.params.id);
                    userRaw.kbpoints -= course.price;
                    userRaw.save();
    
                    res.json("Successfully bought");
                }else{
                    throw new Error("You don't have enought money");
                }
            }
        }else{
            throw new Error("Not found");
        }
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router;