import express from 'express';

//Controller imports
import basicController from './Controller/basicCtrl';
import userController from './Controller/userController';


const routes = express();

//Basic Routes 
routes.get('/', basicController.get);

//User routes
routes.post('/signup', userController.post);


export default routes;