import {
    createUser,
    loginUser,
    listAllUsers,
    updateUser,
    deleteUser,
} from './user.controllers';

import {
    createCategory,
    listCategory,
    getCategoryWithRelations,
} from './category.controllers';
import { createRealEstate, listRealEstate } from './realEstate.controllers';
import { createSchedules, getSchedules } from './schedules.Controllers';

export default {
    createUser,
    loginUser,
    listAllUsers,
    updateUser,
    deleteUser,
    createCategory,
    listCategory,
    getCategoryWithRelations,
    createRealEstate,
    listRealEstate,
    createSchedules,
    getSchedules,
};
