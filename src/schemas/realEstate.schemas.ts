import z from 'zod';

import { address, addressWithOutId } from './addresses.schemas';
import { category } from './category.schemas';

export const realEstate = z.object({
    id: z.number(),
    sold: z.boolean(),
    value: z.union([z.string(), z.number()]),
    size: z.number().positive(),
    createdAt: z.string(),
    updatedAt: z.string(),
    address,
    category,
});

export const realEstateRequest = realEstate
    .omit({
        id: true,
        sold: true,
        createdAt: true,
        updatedAt: true,
        category: true,
        address: true,
    })
    .extend({ categoryId: z.number(), address: addressWithOutId });

export const RealEstateTEste = realEstate.omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true,
});

export const onlyAddress = realEstate.pick({ address: true });
