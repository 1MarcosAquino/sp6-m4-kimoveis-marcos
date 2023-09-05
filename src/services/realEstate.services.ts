import { realEstateRepo, adressRepo, categoryRepo } from '../data-source';
import { AppError } from '../erros';
import { TRealEstate } from '../interfaces';

export const listRealEstate = async () =>
    await realEstateRepo.find({
        relations: {
            address: true,
        },
    });

export const listRealEstateById = async (id: number) =>
    await realEstateRepo.findOneBy({ id });

export const createRealEstate = async (data: TRealEstate) => {
    const zipCode = data.address.zipCode;

    const verifyAddress = await adressRepo.findOneBy({ zipCode });

    if (verifyAddress) throw new AppError('Address already exists', 409);

    const { address, value, size, sold } = data;
    const realEstate = { value, size, sold };

    const addressResponse = await adressRepo.save(adressRepo.create(address));

    const realEstateResponse = await realEstateRepo.save(
        realEstateRepo.create(realEstate)
    );

    const { id } = realEstateResponse;
    const category = await categoryRepo.findOneBy({ id });

    return { ...realEstateResponse, address: { ...addressResponse }, category };
};
