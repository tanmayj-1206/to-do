const express = require('express');
const homeController = require('../controller/home_controller');
const router = express.Router();




router.get('/', homeController.home);
router.use('/create-task', require('./create'));
router.use('/delete-task', require('./delete'));


module.exports = router;