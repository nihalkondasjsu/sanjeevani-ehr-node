import {Repositories} from 'node-library';
import {HealthRecord} from '../models';

class HealthRecordRepository extends Repositories.BaseRepository {
    
    constructor(){
        super(HealthRecord);
    }

    bulkCreate = async(docs:object[]) => {
        console.log('Repositories','bulkCreate');
        return await this.model.insertMany(docs);
    }
}

export default HealthRecordRepository;