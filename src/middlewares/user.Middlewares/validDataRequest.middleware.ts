import { Request, Response, NextFunction } from 'express';
import { ZodTypeAny } from 'zod';

export const validDataRequest =
    (anySchema: ZodTypeAny) =>
    (req: Request, res: Response, next: NextFunction): void => {
        req.body = anySchema.parse(req.body);

        next();
    };
