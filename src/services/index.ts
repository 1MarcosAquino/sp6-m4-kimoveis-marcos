import {
    createUser,
    updateUser,
    getUserByEmail,
    listAllUsers,
    deleteUser,
    getUserByIdOrEmail,
    userDeleted,
} from './user.services';

import {
    getCategoryByNameOrId,
    listCategory,
    createCategory,
    getCategoryByIdWithRelations,
} from './categories.services';

import { createRealEstate, listRealEstate } from './realEstate.services';

import {
    verifyHour,
    verifyDate,
    comparePassword,
    createToken,
    getTime,
} from './utilities';

import {
    createSchedulesService,
    verifySchedulesExist,
    schedulesRealEstateById,
} from './schedules.services';

export default {
    createUser,
    getUserByEmail,
    listAllUsers,
    updateUser,
    deleteUser,
    getUserByIdOrEmail,
    userDeleted,
    schedulesRealEstateById,
    getCategoryByNameOrId,
    listCategory,
    createCategory,
    getCategoryByIdWithRelations,

    createRealEstate,
    listRealEstate,

    verifyHour,
    verifyDate,
    comparePassword,
    createToken,
    getTime,

    createSchedulesService,
    verifySchedulesExist,
};
