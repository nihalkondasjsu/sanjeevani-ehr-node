import {Helpers, Services} from 'node-library';
import {HealthRecordRepository} from '../repositories';

class HealthRecordService extends Services.BaseService{
    
    constructor() { 
        super(new HealthRecordRepository());
    }

    bulkCreate = async(request:Helpers.Request,docs:object[]) => {
        console.log('Service','bulkCreate');
        return await this.repository.bulkCreate(docs)
    }

}

export default new HealthRecordService();