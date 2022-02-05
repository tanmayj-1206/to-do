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

module.exports.createTask = function(req, res) {
    Task.create(req.body, function(err, newTask) {
        if(err)
        {
            console.log(err);
        }
    });
    return res.redirect('back');
};

module.exports.deleteTask = function(req, res) {
    console.log(req.body.taskName);
    if(req.body.taskName != undefined)
    {
        // console.log(req.body.taskName);
        for(let delID of req.body.taskName)
        {
            console.log('hmm');
            Task.findByIdAndDelete(delID, function(err) {
                if(err)
                {
                    console.log('not found');
                }
            });
        }
    }
    console.log('del');
    return res.redirect('back');
};