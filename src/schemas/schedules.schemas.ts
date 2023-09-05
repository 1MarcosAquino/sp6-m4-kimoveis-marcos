import z from 'zod';

export const schedules = z.object({
    id: z.number(),
    date: z.string().regex(/(^[0-9]{4}[/][0-9]{2}[/][0-9]{2}$)/),
    hour: z.string().regex(/(^[0-9]{2}[:][0-9]{2}$)/),
    realEstateId: z.number(),
    userId: z.number(),
});

export const schedulesRequest = schedules.omit({
    id: true,
    userId: true,
});
