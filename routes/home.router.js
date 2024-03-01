const homeController = require('../controllers/home.controller');


const homeRouter = require('express').Router();

homeRouter.get('/', homeController.index);
homeRouter.get('/chat', homeController.chat);


module.exports = homeRouter;