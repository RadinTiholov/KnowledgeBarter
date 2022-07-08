const router = require('express').Router();

const courseService = require('../services/courseService.js');
const userService = require('../services/userService.js');
const { isAuth, isGuest } = require('../middlewares/authMiddleware.js');

router.get('/all', async  (req, res) => {
    const courses = await courseService.getAll().lean();
    res.json(courses);
})

router.post('/all', isAuth, async (req, res) => {
    try{
        const data = req.body;
        const owner = await userService.getUser(req.user._id).lean();

        data['likes'] = 0;
        data['price'] = 500;
        data['owner'] = req.user._id;
        if(data['lessons'].length <= 5){
            throw new Error("Lessons should be more than 5")
        }
        if(data['lessons'].some(x => data['lessons'].indexOf(x) !== data['lessons'].lastIndexOf(x))){
            throw new Error("Unauthorized to do this action")
        }
        if(!ownsAll(data, owner)){
            throw new Error("Unauthorized to do this action")
        }

        const result = await courseService.create(data);

        owner.kbpoints += 500;
        await userService.updateKBPoints(req.user._id, owner);

        const userRaw = await userService.getUser(req.user._id);
        userRaw.ownCourses.push(result._id);
        userRaw.save();

        res.json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
})

router.get('/details/:id', async (req, res) => {
    try{
        const course = await courseService.getOne(req.params.id).lean();
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

function ownsAll(data, owner){
    let ownsAllLessons = true;
        for (const lesson of data['lessons']) {
            let temp = false;
            owner.ownLessons.forEach(userLesson => {
                if(lesson == userLesson){
                    temp = true;
                }
            });
            if(!temp){
                ownsAllLessons = false;
                break;
            }
        }
    return ownsAllLessons;
}

module.exports = router;