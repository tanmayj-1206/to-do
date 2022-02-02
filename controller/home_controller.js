const mongoose = require('mongoose');
const Task = require('../model/task_list');
const db = require('../config/mongoose');

module.exports.home = function(req, res) {
    Task.find({}, function(err, task) {
        if(err)
        {
            console.log(err);
        }
        return res.render('home', {taskList: task});
    })

};