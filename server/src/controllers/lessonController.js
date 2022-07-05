const router = require('express').Router();

const lessonService = require('../services/lessonService.js');
const userService=  require('../services/userService.js');
const { isAuth, isGuest } = require('../middlewares/authMiddleware.js');

router.get('/all', async (req, res) => {
    const allLessons = await lessonService.getAll().lean();
    res.json(allLessons);
})

router.post('/all', isAuth, async (req, res) => {
    try{
        const data = req.body;
        data['likes'] = 0;
        data['owner'] = req.user._id;
        data['views'] = 0;
        data['price'] = 100;

        const result = await lessonService.create(data);

        const owner = await userService.getOwner(req.user._id).lean();
        owner.kbpoints += 100;
        await userService.updateKBPoints(req.user._id, owner);
        res.json(result);
    }catch(error){
        res.status(400).json({message: error.message});
    }
})


module.exports = router;