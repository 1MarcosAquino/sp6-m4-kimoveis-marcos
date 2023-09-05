import { Router } from 'express';
import controller from '../controllers';
import middleware from '../middlewares';
import schema from '../schemas';

export const realEstate: Router = Router();

realEstate.post(
    '',
    middleware.validToken,
    middleware.permissionOfAccess('admin'),
    middleware.validDataRequest(schema.realEstateRequest),
    controller.createRealEstate
);

realEstate.get('', controller.listRealEstate);
