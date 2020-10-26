import * as express from 'express';
import * as mongoose from 'mongoose';
import app from './startup/app';
import {Config} from 'node-library';
import * as routes from './routes';

startServer();

function startServer(){

    mongoose.connect(Config.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    .then(()=>console.log('db connected'))
    .catch((err : mongoose.Error)=>console.log(err));

    const router :express.Router = express.Router()

    router.use('/health-record',routes.HealthRecordRoutes);
    
    app.use('/api/v1',router);
    
    const port = process.env.PORT||Config.PORT

    app.listen(port,()=>{
        console.log('app listening',port);
    })
    
    Config.routesList(app);
}