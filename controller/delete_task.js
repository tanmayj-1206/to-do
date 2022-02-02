const mongoose = require('mongoose');
const Task = require('../model/task_list');
const db = require('../config/mongoose');

module.exports.delete = function(req, res) {
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