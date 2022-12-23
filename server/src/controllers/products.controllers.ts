import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import createProdService from "../services/products/createProd.service";
import { instanceToPlain } from "class-transformer";
import listProdService from "../services/products/listProds.service";
import listOneProdService from "../services/products/listOneProd.service";

const createProdController = async( req: Request, res: Response)=>{
    const data = req.body;
    const newproduct = await createProdService(data);

	return res.status(201).send(instanceToPlain(newproduct));
}

const listProdController = async (req: Request, res: Response) => {
    const prod = await listProdService();
	return res.json(instanceToPlain(prod));
}

const retrieveUserController= async (req: Request, res: Response) => {
    const {prod_id} = req.params
    const retrieveUser = await listOneProdService({prod_id});

	return res.json(instanceToPlain(retrieveUser));
}

export { createProdController, listProdController, retrieveUserController }