import { Request, Response, NextFunction } from 'express';
import service from '../../services';
import { TUser } from '../../interfaces';

export const verifyUserExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const data = parseInt(req.params.id) || req.body.email;

    const user: TUser | null = await service.getUserByIdOrEmail(data);

    res.locals.user = user!;

    return next();
};
