import z from 'zod';
import schema from '../schemas';

export type TSchedules = z.infer<typeof schema.schedules>;

export type TSchedulesRequest = z.infer<typeof schema.schedulesRequest>;
