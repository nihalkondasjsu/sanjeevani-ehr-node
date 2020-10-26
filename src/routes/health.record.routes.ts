import { Router } from 'express';
import { Middlewares } from 'node-library';
import { HealthRecordController } from '../controllers';

const router = Router()

const controller = new HealthRecordController();

const validatorMiddleware = new Middlewares.ValidatorMiddleware([
    {
        "id": "/healthRecordSchema",    
        "type": "object",
        "additionalProperties": false,
        "minProperties":13,
        "properties": {
            "first_name": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            },
            "gender": {
                "type": "string"
            },
            "age": {
                "type": "number"
            },
            "notes_demographics": {
                "type": "string"
            },
            "photo": {
                "type": "string"
            },
            "height": {
                "type": "number"
            },
            "weight": {
                "type": "number"
            },
            "body_temperature": {
                "type": "number"
            },
            "pulse_rate": {
                "type": "number"
            },
            "bp": {
                "type": "number"
            },
            "medication": {
                "type": "string"
            },
            "notes_health_vitals": {
                "type": "string"
            }
        }
    }
]);

router.post('/',Middlewares.authCheck(false),validatorMiddleware.validateRequestBody({
    "$ref": "/healthRecordSchema"
}),controller.create)

router.post('/bulk',Middlewares.authCheck(false),validatorMiddleware.validateRequestBody({
    "type": "array",
    "items": {
        "$ref": "/healthRecordSchema"
    }
}),controller.bulkCreate)

router.get('/',Middlewares.authCheck(false),controller.getAll)

router.get('/:id',Middlewares.authCheck(false),controller.get)

export default router;