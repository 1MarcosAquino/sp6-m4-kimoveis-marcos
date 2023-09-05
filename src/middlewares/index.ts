import {
    validDataRequest,
    verifyUserExists,
    validToken,
    permissionOfAccess,
    validEmail,
} from './user.Middlewares';

import { categoryIsExists } from './category.Middlewares';

export default {
    validDataRequest,
    verifyUserExists,
    validToken,
    validEmail,
    permissionOfAccess,
    categoryIsExists,
};
