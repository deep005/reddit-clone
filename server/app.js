import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

//Controller imports
import basicController from './Controller/basicCtrl';

mongoose.connect('mongodb://localhost/27017/reddit', () => {
    console.log('Connected to mongodb');
})
 const app = express();

//Middleware

app.use('/api', basicController.get);
export default app;
