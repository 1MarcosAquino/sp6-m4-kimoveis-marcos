import z from 'zod';

export const user = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().max(45).email(),

    password: z.string().min(4).max(120),
    admin: z.boolean().nullish(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullish(),
});

export const userResquest = user.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
});

export const userResponse = user.omit({
    password: true,
});

export const userLogin = user
    .pick({
        password: true,
        email: true,
    })
    .required();

export const creaeToken = user.pick({
    id: true,
    admin: true,
});

export const userUpdate = user.omit({ id: true, admin: true }).partial();
