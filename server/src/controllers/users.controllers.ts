import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IUserLogin, IUserRequest, IUserUpdate } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createuser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/getUsers.service";
import { updateUsersService } from "../services/users/updateUser.service";
import loginUserService from "../services/users/loginUser.service";
import  jwt  from "jsonwebtoken";
import getUserService from "../services/users/getUser.service";
import { json } from "stream/consumers";


const createUserController = async (req: Request, res: Response) => {
	const { name, email, password, cellphone, address, cpf, birthdate, is_seller }: IUserRequest = req.body;
	const user = await createUserService({ name, email, password, cellphone, address, cpf, birthdate, is_seller });
	return res.status(201).json(instanceToPlain(user));
};

const deleteUserController = async (req: Request, res: Response) => {
	const { authorization } = req.headers;
	const token = authorization!.split(" ")[1];
	const { id } = jwt.decode(token) as { id: string };
	await deleteUserService({ id });
	return res.status(204).json("");
}

const getUserController = async (req: Request, res: Response) => {
	const { authorization } = req.headers;
	const token = authorization!.split(" ")[1];
	const { id } = jwt.decode(token) as { id: string };
	const user = await getUserService({id});
	return res.json(user)
}

const getUsersController = async (req: Request, res: Response) => {
	const user = await listUsersService();
	return res.json(instanceToPlain(user));
};

const updateUserController = async (req: Request, res:Response) => {
	const { authorization } = req.headers;
	const token = authorization!.split(" ")[1];
	const { id } = jwt.decode(token) as { id: string };
	const { name, password, cellphone, address, cpf, birthdate, is_seller }:IUserUpdate = req.body
	const user = await updateUsersService({
		id,
		name, password, cellphone, address, cpf, birthdate, is_seller
	})
	return res.status(200).json(user);
}

const loginUserController = async (req: Request, res: Response) => {
	const { email, password }: IUserLogin = req.body;
	const token = await loginUserService({email, password});
	return res.status(200).json(token);
};


export { createUserController, getUsersController, getUserController, deleteUserController, updateUserController, loginUserController }