const Course = require('../models/Course.js');
const userService = require('../services/userService.js');

exports.getAll = () => Course.find();
exports.getOne = (id) => Course.findById(id);

exports.getHighestRated = async () => {
    const courses = await this.getAll().lean().sort({ 'likes': -1 });
    if (courses.length >= 4) {
        return [courses[0], courses[1], courses[2], courses[3]];
    } else {
        return {};
    }
}

exports.create = async (data, userId) => {
    const owner = await userService.getUser(userId).lean();

    data['likes'] = 0;
    data['price'] = 500;
    data['owner'] = userId;
    if (data['lessons'].length <= 5) {
        throw new Error("Lessons should be more than 5")
    }
    if (data['lessons'].some(x => data['lessons'].indexOf(x) !== data['lessons'].lastIndexOf(x))) {
        throw new Error("Unauthorized to do this action")
    }
    if (!ownsAll(data, owner)) {
        throw new Error("Unauthorized to do this action")
    }

    const result = await Course.create(data);

    owner.kbpoints += 500;
    await userService.updateKBPoints(userId, owner);

    const userRaw = await userService.getUser(userId);
    userRaw.ownCourses.push(result._id);
    userRaw.save();

    return result;
}

exports.edit = async (courseId, userId, data) => {
    const course = await this.getOne(courseId).lean();
    if (course.owner == userId) {
        await Course.findOneAndUpdate({ _id: courseId }, data, { runValidators: true });
        return "Successfully updated";
    } else {
        throw new Error("Unauthorized to do this action");
    }
}

exports.delete = async (courseId, userId) => {
    const course = await this.getOne(courseId).lean();
    if (course) {
        if (course.owner == userId) {
            await Course.deleteOne({ _id: courseId });
            return "Successfully deleted";
        } else {
            throw new Error("Unauthorized to do this action");
        }
    } else {
        throw new Error("Not found");
    }
}

exports.like = async (courseId, userId) => {
    const course = await this.getOne(courseId).lean();
    const user = await userService.getUser(userId).lean();
    if (course) {
        if (course.owner == userId || user.likedCourses.some(x => x == courseId)) {
            throw new Error("Unauthorized to do this action");
        } else {
            // Updating the count of the likes
            course.likes += 1;
            await Course.findOneAndUpdate({ _id: courseId }, course, { runValidators: true });

            const userRaw = await userService.getUser(userId);

            userRaw.likedCourses.push(courseId);
            userRaw.save();

            return "Successfully liked";
        }
    } else {
        throw new Error("Not found");
    }
}

exports.buy = async (courseId, userId) => {
    const course = await this.getOne(courseId).lean();
    const user = await userService.getUser(userId).lean();
    if (course) {
        if (course.owner == userId || user.boughtCourses.some(x => x == courseId)) {
            throw new Error("Unauthorized to do this action");
        } else {
            if (user.kbpoints >= course.price) {
                const userRaw = await userService.getUser(userId);
                userRaw.boughtCourses.push(courseId);
                userRaw.kbpoints -= course.price;
                userRaw.save();

                return "Successfully bought";
            } else {
                throw new Error("You don't have enought money");
            }
        }
    } else {
        throw new Error("Not found");
    }
}

function ownsAll(data, owner) {
    let ownsAllLessons = true;
    for (const lesson of data['lessons']) {
        let temp = false;
        owner.ownLessons.forEach(userLesson => {
            if (lesson == userLesson) {
                temp = true;
            }
        });
        if (!temp) {
            ownsAllLessons = false;
            break;
        }
    }
    return ownsAllLessons;
}