const mongoose = require('mongoose');
const Task = require('../model/task_list');
const db = require('../config/mongoose');

module.exports.createTask = function(req, res) {
    Task.create(req.body, function(err, newTask) {
        if(err)
        {
            console.log(err);
        }
    });
    return res.redirect('back');
};