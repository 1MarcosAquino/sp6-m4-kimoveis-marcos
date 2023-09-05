import { Router } from 'express';
import controller from '../controllers';
import middleware from '../middlewares';
import schema from '../schemas';

export const login: Router = Router();

login.post(
    '',
    middleware.validEmail,
    middleware.validDataRequest(schema.userLogin),
    middleware.verifyUserExists,
    controller.loginUser
);
