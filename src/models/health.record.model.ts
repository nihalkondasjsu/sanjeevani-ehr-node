import * as mongoose from 'mongoose';

const healthRecordSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required: 'first_name is required'
    },
    last_name:{
        type:String,
        required: 'last_name is required'
    },
    gender:{
        type:String,
        default:'other'
    },
    age:{
        type:Number,
        default:0
    },
    notes_demographics:{
        type:String,
        default:'none'
    },
    photo:{
        type:String,
        default:'none'
    },
    height:{
        type:Number,
        default:0
    },
    weight:{
        type:Number,
        default:0
    },
    body_temperature:{
        type:Number,
        default:0
    },
    pulse_rate:{
        type:Number,
        default:0
    },
    bp:{
        type:Number,
        default:0
    },
    medication:{
        type:String,
        default:'none'
    },
    notes_health_vitals:{
        type:String,
        default:'none'
    },
    customAttributes:mongoose.Schema.Types.Mixed
});

const HealthRecord = mongoose.model('HealthRecord',healthRecordSchema);

export default HealthRecord;