import z from 'zod';
import schema from '../schemas';

export type TAdress = z.infer<typeof schema.address>;
