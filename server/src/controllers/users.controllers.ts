import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IUserRequest } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createuser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/getUsers.service";


const createUserController = async (req: Request, res: Response) => {
	const { name, email, password, cellphone, address, cpf, birthdate, is_seller }: IUserRequest = req.body;
	const user = await createUserService({ name, email, password, cellphone, address, cpf, birthdate, is_seller });
	return res.status(201).json(instanceToPlain(user));
};

const deleteUserController = async (req: Request, res: Response) => {
	const { id } = req.params
	await deleteUserService({ id });
	return res.status(204).json("");
}

const getUsersController = async (req: Request, res: Response) => {
	const user = await listUsersService();
	return res.json(instanceToPlain(user));
};

export { createUserController, getUsersController, deleteUserController }