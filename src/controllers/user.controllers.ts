import { Request, Response } from 'express';
import service from '../services';
import { TUser, TUserResponse } from '../interfaces';
import schema from '../schemas';

export const createUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    await service.getUserByEmail(req.body.email);
    const newUser = await service.createUser(req.body);

    return res.status(201).json(newUser);
};

export const deleteUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const currentTime = service.getTime().fullTime;
    const data = {
        ...res.locals.user,
        deletedAt: currentTime,
    };

    await service.deleteUser(data);

    return res.status(204).send();
};

export const listAllUsers = async (
    req: Request,
    res: Response
): Promise<Response<Array<TUser>>> => {
    const allUsers: Array<TUser> = await service.listAllUsers();

    const allUserResponse: Array<TUserResponse> = allUsers?.map((user) =>
        schema.userResponse.parse(user)
    );

    return res.status(200).json(allUserResponse);
};

export const loginUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const user: TUser | null = await service.getUserByIdOrEmail(req.body.email);

    const token = service.createToken(user!);

    await service.comparePassword(req.body.password, user!.password);

    return res.status(200).json({ token });
};

export const updateUser = async (req: Request, res: Response) => {
    const { user } = res.locals;

    const data = {
        ...user,
        ...req.body,
    };

    const userUpdate = await service.updateUser(data);
    return res.status(200).json(userUpdate);
};
