const express = require('express');
const homeController = require('../controller/home_controller');
const router = express.Router();




router.get('/', homeController.home);
router.post('/create-task', homeController.createTask);
router.post('/delete-task', homeController.deleteTask);


module.exports = router;