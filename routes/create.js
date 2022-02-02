const express = require('express');
const create = require('../controller/create_task');
const router = express.Router();

router.post('/', create.createTask);

module.exports = router;