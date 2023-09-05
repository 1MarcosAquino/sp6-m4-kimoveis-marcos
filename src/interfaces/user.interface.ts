import z from 'zod';
import schema from '../schemas';

export type TUser = z.infer<typeof schema.user>;

export type TUserResquest = z.infer<typeof schema.userResquest>;

export type TUserResponse = z.infer<typeof schema.userResponse>;

export type TCreateToken = z.infer<typeof schema.creaeToken>;

export type TUserUpdate = z.infer<typeof schema.userUpdate>;
