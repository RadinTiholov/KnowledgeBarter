const Lesson = require('../models/Lesson.js');
const userService = require('../services/userService.js');

exports.getAll = () => Lesson.find();
exports.getOne = (id) => Lesson.findById(id);
exports.updateById = (id, data) => Lesson.findOneAndUpdate({ _id: id }, data, { runValidators: true });
exports.deleteById = (id) => Lesson.deleteOne({ _id: id });

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