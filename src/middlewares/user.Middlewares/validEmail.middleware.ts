import { Request, Response, NextFunction } from 'express';

import { AppError } from '../../erros';
import services from '../../services';

export const validEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { email } = req.body;
    const emailIsvalid = email.includes('_');
    if (emailIsvalid) throw new AppError('Invalid credentials', 401);
    await services.userDeleted(req.body.email);

    next();
};
