import * as express from 'express';
import { Controllers } from "node-library";
import { HealthRecordService } from "../services";

class HealthRecordController extends Controllers.BaseController{

    constructor(){
        super(HealthRecordService)
    }

    bulkCreate = async(req : express.Request, res : express.Response) => {
        console.log('Controller','bulkCreate');
        const request = res.locals.request;
        const body = req.body;
        const createdDocument = await this.service.bulkCreate(request, body);
        return res.send(createdDocument);
    }

}

export default HealthRecordController;