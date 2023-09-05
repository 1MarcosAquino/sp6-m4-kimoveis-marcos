import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../erros';
import jwt from 'jsonwebtoken';

export const validToken = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const { authorization } = req.headers;

    if (!authorization) throw new AppError('Missing bearer token', 401);

    const token = authorization.split(' ')[1];

    const secretKey = String(process.env.SECRET_KEY);

    jwt.verify(token, secretKey, (err: any, decoded: any) => {
        if (err) throw new AppError(err.message, 401);

        res.locals.admin = decoded.admin;
        res.locals.id = decoded.sub;
    });

    return next();
};
