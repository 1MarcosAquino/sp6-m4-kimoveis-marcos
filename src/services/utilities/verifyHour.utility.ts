import { AppError } from '../../erros';

export const verifyHour = (time: string): void => {
    const hour = parseInt(time.split(':')[0]);
    const hourError = 'Invalid hour, available times are 8AM to 18PM';
    if (hour < 8 || hour > 18) throw new AppError(hourError, 400);
};
