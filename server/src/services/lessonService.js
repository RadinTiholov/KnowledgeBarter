const Lesson = require('../models/Lesson.js');
const userService = require('../services/userService.js');

exports.getAll = () => Lesson.find();
exports.getOne = (id) => Lesson.findById(id);

exports.likeById = (id, data) => {
    data.likes += 1;
    return Lesson.findOneAndUpdate({ _id: id }, data, { runValidators: true })
}

exports.getMostPopular = async () => {
    const lessons = await this.getAll().lean();

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