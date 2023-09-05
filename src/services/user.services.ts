import { userResponse } from '../schemas/users.schemas';
import { AppError } from '../erros';
import { TUser, TUserResponse, TUserUpdate } from '../interfaces';
import { userRepo } from '../data-source';
import { User } from '../entities';

import schema from '../schemas';

export const createUser = async (data: User): Promise<TUserResponse> => {
    const newUser = await userRepo.save(userRepo.create(data));

    const user: TUserResponse = schema.userResponse.parse(newUser);

    return user;
};

export const updateUser = async (data: User): Promise<TUserResponse> => {
    const newUser = await userRepo.save(userRepo.create(data));

    const user: TUserResponse = userResponse.parse(newUser);

    return user;
};

export const deleteUser = async (data: User): Promise<TUserResponse | void> => {
    const newUser: TUserUpdate = await userRepo.save(userRepo.create(data));

    if (!newUser) throw new AppError('User not found', 404);
};

export const getUserByIdOrEmail = async (
    value: number | string
): Promise<TUser | null> => {
    const key: 'id' | 'email' = typeof value === typeof 1 ? 'id' : 'email';

    const user: TUser | null = await userRepo.findOneBy({ [key]: value });

    if (!user) throw new AppError('User not found', 404);

    return user;
};

export const getUserByEmail = async (value: string): Promise<TUser | null> => {
    const user: TUser | null =
        (await userRepo.findOneBy({ email: value })) || null;

    if (user) throw new AppError('Email already exists', 409);

    return user;
};

export const listAllUsers = async (): Promise<Array<TUser>> =>
    await userRepo.find();

export const userDeleted = async (email: string): Promise<void> => {
    const userList = await userRepo.find({ withDeleted: true });

    const [user] = userList.filter((user) => user.email == email);

    if (user.deletedAt) throw new AppError('Invalid credentials', 401);
};
