import { Request, Response } from 'express';
import service from '../services';

export const listRealEstate = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const realEstateList = await service.listRealEstate();

    return res.status(200).json(realEstateList);
};

export const createRealEstate = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const response = await service.createRealEstate(req.body);

    return res.status(201).json(response);
};
