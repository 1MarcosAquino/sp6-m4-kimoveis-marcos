import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../erros';

export const permissionOfAccess =
    (permission: 'admin' | 'any') =>
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const admin = res.locals.admin;
        const id = parseInt(res.locals.id);
        const paramsId = parseInt(req.params.id);

        if (permission == 'admin' && !admin)
            throw new AppError('Insufficient permission', 403);

        if (req.method == 'PATCH' && !admin)
            if (id !== paramsId)
                throw new AppError('Insufficient permission', 403);

        if (req.method == 'DELETE' && !admin)
            if (id !== paramsId)
                throw new AppError('Insufficient permission', 403);

        if (req.method == 'PUT' && !admin)
            throw new AppError('Insufficient permission', 403);

        if (req.method == 'GET' && !admin)
            if (id !== paramsId)
                throw new AppError('Insufficient permission', 403);

        return next();
    };
