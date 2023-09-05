import { AppError } from '../../erros';

export const verifyDate = (date: string) => {
    const day = new Date(date).getDay();

    const dayError = 'Invalid date, work days are monday to friday';

    if (day === 0 || day === 6) throw new AppError(dayError, 400);
};
