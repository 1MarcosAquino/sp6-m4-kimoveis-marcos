import z from 'zod';
import schema from '../schemas';

export type TRealEstate = z.infer<typeof schema.realEstate>;

export type TRealEstateRequest = z.infer<typeof schema.realEstateRequest>;

export type TArrayRealEstate = z.infer<typeof schema.arrayRealEstate>;
