import { Request, Response } from 'express';
import service from '../services';

export const listCategory = async (req: Request, res: Response) => {
    const categories = await service.listCategory();

    return res.status(200).json(categories);
};

export const createCategory = async (req: Request, res: Response) => {
    const category = await service.createCategory(req.body);

    return res.status(201).json(category);
};

export const getCategoryWithRelations = async (req: Request, res: Response) => {
    const category = await service.getCategoryByIdWithRelations(
        parseInt(req.params.id)
    );

    return res.status(200).json(category);
};
