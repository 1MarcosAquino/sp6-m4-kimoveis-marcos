import { Request, Response } from 'express';

import { verifyHour } from '../services/utilities/verifyHour.utility';
import { verifyDate } from '../services/utilities/verifyDate.utility';
import service from '../services';

export const createSchedules = async (req: Request, res: Response) => {
    verifyHour(req.body.hour);
    verifyDate(req.body.date);

    const userId = parseInt(res.locals.id);

    await service.createSchedulesService(req.body, userId);

    const response = { message: 'Schedule created' };

    return res.status(201).json(response);
};

export const getSchedules = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const shedules = await service.schedulesRealEstateById(id);

    return res.status(200).json(shedules);
};
