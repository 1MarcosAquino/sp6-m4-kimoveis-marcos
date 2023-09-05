import { Request, Response, NextFunction } from 'express';
import service from '../../services';
import { AppError } from '../../erros';

export const categoryIsExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const category = await service.getCategoryByNameOrId(req.body.name);

    if (!category) throw new AppError('Category not found', 404);

    return next();
};
