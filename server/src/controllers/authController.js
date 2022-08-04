const router = require('express').Router();

const authService = require('../services/authService.js');
const userService = require('../services/userService.js');
const { isAuth, isGuest } = require('../middlewares/authMiddleware.js');

router.post('/login', isGuest, async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await authService.login(email, password);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})
router.post('/register', isGuest, async (req, res) => {
    try {
        const result = await authService.register(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.get('/logout', isAuth, (req, res) => {
    authService.logout(req.user.token);
    res.status(200).json({ message: "Logged out" });
})
router.get('/:id', async (req, res) => {
    try {
        const user = await userService.getUser(req.params.id).lean();
        res.json({
            boughtCourses: user.boughtCourses,
            boughtLessons: user.boughtLessons,
            email: user.email,
            kbpoints: user.kbpoint,
            likedCourses: user.likedCourses,
            likedLessons: user.likedLessons,
            ownCourses: user.ownCourses,
            ownLessons: user.ownLessons,
            profilePicture: user.profilePicture,
            username: user.username,
            _id: user._id
        });
    } catch (error) {
        res.status(400).json({ message: "Bad request" })
    }
})

module.exports = router;