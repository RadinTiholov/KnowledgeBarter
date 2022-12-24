const Lesson = require('../models/Lesson.js');
const userService = require('../services/userService.js');
const commentService = require('../services/commentService.js');

exports.getAll = () => Lesson.find();
exports.getOne = (id) => Lesson.findById(id);

exports.getMostPopular = async () => {
    const lessons = await this.getAll().lean().sort({'views': -1});

    if (lessons.length >= 4) {
        return [lessons[0], lessons[1], lessons[2], lessons[3]];
    }
    else {
        return {};
    }
}

exports.create = async (data, userId) => {
    data['likes'] = 0;
    data['owner'] = userId;
    data['views'] = 0;
    data['price'] = 100;

    const result = await Lesson.create(data);

    const owner = await userService.getUser(userId).lean();
    owner.kbpoints += 100;
    await userService.updateKBPoints(userId, owner);

    const userRaw = await userService.getUser(userId);
    userRaw.ownLessons.push(result._id);
    userRaw.save();

    return result;
}

exports.incrementViews = async (lessonId) => {
    const lessonRaw = await this.getOne(lessonId);
    lessonRaw.views++;
    lessonRaw.save();
}

exports.edit = async (data, id, userId) => {
    const lesson = await this.getOne(id).lean();

    if (lesson.owner == userId) {
        await Lesson.findOneAndUpdate({ _id: id }, data, { runValidators: true });
        return "Successfully updated"
    } else {
        throw new Error("Unauthorized to do this action");
    }
}

exports.delete = async (lessonId, userId) => {
    const lesson = await this.getOne(lessonId).lean();
        if (lesson) {
            if (lesson.owner == userId) {
                await Lesson.deleteOne({ _id: lessonId });
                return "Successfully deleted";
            } else {
                throw new Error("Unauthorized to do this action");
            }
        } else {
            throw new Error("Not found");
        }
}

exports.like = async (lessonId, userId) => {
        const lesson = await this.getOne(lessonId).lean();
        const user = await userService.getUser(userId).lean();
        if (lesson) {
            if (lesson.owner == userId || user.likedLessons.some(x => x == lessonId)) {
                throw new Error("Unauthorized to do this action");
            } else {
                const data = await this.getOne(lessonId).lean();

                data.likes += 1;
                await Lesson.findOneAndUpdate({ _id: lessonId }, data, { runValidators: true });

                const userRaw = await userService.getUser(userId);
                userRaw.likedLessons.push(lessonId);
                userRaw.save();

                return "Successfully liked";
            }
        } else {
            throw new Error("Not found");
        }
}

exports.buy = async (lessonId, userId) => {
        const lesson = await this.getOne(lessonId).lean();
        const user = await userService.getUser(userId).lean();
        if (lesson) {
            if (lesson.owner == userId || user.boughtLessons.some(x => x == lessonId)) {
                throw new Error("Unauthorized to do this action");
            } else {
                if (user.kbpoints >= lesson.price) {
                    const userRaw = await userService.getUser(userId);
                    userRaw.boughtLessons.push(lessonId);
                    userRaw.kbpoints -= lesson.price;
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

exports.comment = async (lessonId, userId, commentData) => {
    const lesson = await this.getOne(lessonId).lean();
    const user = await userService.getUser(userId).lean();
    if (lesson) {
        commentData['owner'] = user._id;
        commentData['lesson'] = lesson._id;
        const comment = await commentService.comment(commentData);

        const lessonRaw = await this.getOne(lessonId);
        lessonRaw.comments.push(comment);
        lessonRaw.save();

        return comment;
    } else {
        throw new Error("Not found");
    }
}