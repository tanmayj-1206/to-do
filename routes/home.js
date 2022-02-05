const express = require('express');
const homeController = require('../controller/home_controller');
const router = express.Router();




router.get('/', homeController.home);
router.use('/create-task', homeController.createTask);
router.use('/delete-task', homeController.deleteTask);


module.exports = router;