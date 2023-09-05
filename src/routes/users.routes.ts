import { Router } from 'express';
import controller from '../controllers';
import middleware from '../middlewares';
import schema from '../schemas';

export const users: Router = Router();

users.post(
    '',
    middleware.validDataRequest(schema.userResquest),
    controller.createUser
);
users.get(
    '',
    middleware.validToken,
    middleware.permissionOfAccess('admin'),
    controller.listAllUsers
);

users.patch(
    '/:id',
    middleware.validToken,
    middleware.verifyUserExists,
    middleware.permissionOfAccess('any'),
    middleware.validDataRequest(schema.userUpdate),
    controller.updateUser
);

users.delete(
    '/:id',
    middleware.validToken,
    middleware.verifyUserExists,
    middleware.permissionOfAccess('admin'),
    controller.deleteUser
);
