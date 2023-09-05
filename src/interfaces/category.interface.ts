import z from 'zod';
import schema from '../schemas';

export type TCategory = z.infer<typeof schema.category>;

export type TCategoryRequest = z.infer<typeof schema.categoryRequest>;
