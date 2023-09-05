import { Router } from 'express';
import controller from '../controllers';
import middleware from '../middlewares';
import schema from '../schemas';

export const schedules: Router = Router();

schedules.post(
    '',
    middleware.validToken,
    middleware.validDataRequest(schema.schedulesRequest),
    controller.createSchedules
);

schedules.get(
    '/realEstate/:id',
    middleware.validToken,
    middleware.permissionOfAccess('admin'),
    controller.getSchedules
);
