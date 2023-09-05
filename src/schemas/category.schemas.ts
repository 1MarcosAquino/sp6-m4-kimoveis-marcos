import z from 'zod';

export const category = z.object({
    id: z.number(),
    name: z.string(),
});

export const categoryRequest = category.omit({ id: true });
