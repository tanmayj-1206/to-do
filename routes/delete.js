const express = require('express');
const router = express.Router();
const deleteTask = require('../controller/delete_task');

router.post('/', deleteTask.delete);

module.exports = router;

