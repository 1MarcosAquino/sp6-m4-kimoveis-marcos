import jwt from 'jsonwebtoken';
import { TCreateToken } from '../../interfaces';

export const createToken = ({ admin, id }: TCreateToken): string => {
    return jwt.sign(
        {
            admin,
        },
        String(process.env.SECRET_KEY),
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: String(id),
        }
    );
};
