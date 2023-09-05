import { TCategory, TCategoryRequest } from '../interfaces';
import { AppError } from '../erros';
import { categoryRepo } from '../data-source';

export const listCategory = async (): Promise<Array<TCategory>> =>
    await categoryRepo.find();

export const getCategoryByNameOrId = async (
    value: string | number
): Promise<TCategory | null> => {
    const key = typeof value == typeof 1 ? 'id' : 'name';

    const category: TCategory | null = await categoryRepo.findOneBy({
        [key]: value,
    });

    return category;
};

export const getCategoryByIdWithRelations = async (
    id: number
): Promise<TCategory> => {
    const query = await categoryRepo.findOne({
        relations: { realEstate: true },
        where: { id },
    });

    if (!query) throw new AppError('Category not found', 404);

    return query;
};

export const createCategory = async (
    data: TCategoryRequest
): Promise<TCategory> => {
    const category = await getCategoryByNameOrId(data.name);

    if (category != null) throw new AppError('Category already exists', 409);

    const newCategory: TCategory = await categoryRepo.save(
        categoryRepo.create(data)
    );

    return newCategory;
};
