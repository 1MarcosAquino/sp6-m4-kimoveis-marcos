import { compare } from 'bcryptjs';
import { AppError } from '../../erros';

export const comparePassword = async (
    passRequest: string,
    passUser: string
) => {
    const verifyPassword = await compare(passRequest, passUser);

    if (!verifyPassword) throw new AppError('Invalid credentials', 401);
};
