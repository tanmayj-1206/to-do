const mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    description: String,
    category: String,
    dueDate: Date
});
// taskSchema.sort({dueDate: -1});
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;