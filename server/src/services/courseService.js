const Course = require('../models/Course.js');

exports.getAll = () => Course.find();
exports.create = (data) => Course.create(data);
exports.getOne = (id) => Course.findById(id);
exports.updateById = (id, data) => Course.findOneAndUpdate({_id: id}, data, { runValidators: true });
exports.deleteById = (id) => Course.findOneAndDelete(id);

exports.likeById = (id, data) => {
    data.likes += 1;
    return Course.findOneAndUpdate({_id: id}, data, { runValidators: true })
}

exports.getHighestRated = async () => {
    const courses = await this.getAll().lean().sort({'likes': -1});
    if(courses.length >= 4){
        return [courses[0], courses[1],courses[2],courses[3]];
    }else{
        return {};
    }
}