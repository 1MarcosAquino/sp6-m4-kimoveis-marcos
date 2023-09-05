import { Router } from 'express';
import controller from '../controllers';
import middleware from '../middlewares';
import schema from '../schemas';

export const categories: Router = Router();

categories.post(
    '',
    middleware.validToken,

    middleware.permissionOfAccess('admin'),
    middleware.validDataRequest(schema.categoryRequest),
    controller.createCategory
);

categories.get('', middleware.categoryIsExists, controller.listCategory);

categories.get(
    '/:id/realEstate',
    middleware.categoryIsExists,
    controller.getCategoryWithRelations
);
