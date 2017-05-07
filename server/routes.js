import express from 'express';

//Controller imports
import basicController from './Controller/basicCtrl';
import postController from './Controller/postController';
import userController from './Controller/userController';
import commentController from './Controller/commentController';


const routes = express();

//Basic Routes 
routes.get('/', basicController.get);

//User routes
routes.post('/signup', userController.post);

//Post Routes
routes.post('/post', postController.post);
routes.get('/posts', postController.getAll);

//comment routes
routes.post('/comment', commentController.post);


export default routes;