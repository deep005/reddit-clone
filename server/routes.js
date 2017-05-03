import express from 'express';
const routes = express();

//Routes 

routes.get('/', (req,res)=>{
    res.json({
        message: 'working'
    });
});

export default routes;