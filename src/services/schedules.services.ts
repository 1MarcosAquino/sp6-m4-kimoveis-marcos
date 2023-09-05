import { TSchedulesRequest } from '../interfaces';
import {
    AppDataSource,
    realEstateRepo,
    scheduleRepo,
    userRepo,
} from '../data-source';

import { AppError } from '../erros';
import { Schedule } from '../entities';

export const verifySchedulesExist = (
    realEstate: number,
    realEstateId: number
) => {
    const messageError =
        'Schedule to this real estate at this date and time already exists';

    if (realEstateId === realEstate) throw new AppError(messageError, 400);
};

export const schedulesRealEstateById = async (id: number) => {
    const query = await realEstateRepo.findOne({
        relations: { address: true, category: true, schedules: { user: true } },
        where: { id },
    });

    if (!query) throw new AppError('RealEstate not found', 404);

    return query;
};

export const createSchedulesService = async (
    dataSchedule: TSchedulesRequest,
    userId: number
) => {
    const { date, hour, realEstateId } = dataSchedule;

    const scheduleExists = await realEstateRepo
        .createQueryBuilder('realEstate')
        .where('realEstate.id = :realEstateId', { realEstateId })
        .getOne();

    if (scheduleExists === null)
        throw new AppError('RealEstate not found', 404);

    const usersWithScheduledTime = await scheduleRepo
        .createQueryBuilder('schedules')
        .where('schedules.userId = :userId', { userId })
        .andWhere('schedules.hour = :hour', { hour })
        .andWhere('schedules.date = :date', { date })
        .getOne();

    if (usersWithScheduledTime !== null)
        throw new AppError(
            'User schedule to this real estate at this date and time already exists',
            409
        );

    const scheduleWithTime = await scheduleRepo
        .createQueryBuilder('schedules')
        .where('schedules.hour = :hour', { hour })
        .andWhere('schedules.date = :date', { date })
        .getOne();

    if (scheduleWithTime !== null)
        throw new AppError(
            'Schedule to this real estate at this date and time already exists',
            409
        );

    await scheduleRepo
        .createQueryBuilder()
        .insert()
        .into(Schedule)
        .values({
            date: date,
            hour: hour,
            realEstate: () => `${realEstateId}`,
            user: () => `${userId}`,
        })
        .execute();
};
