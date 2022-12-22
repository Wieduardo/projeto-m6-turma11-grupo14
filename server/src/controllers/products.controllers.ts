import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import createProdService from "../services/products/createProd.service";
import { instanceToPlain } from "class-transformer";

const createProdController = async( req: Request, res: Response)=>{
    const data = req.body;
    const newproduct = await createProdService(data);

	return res.status(201).send(instanceToPlain(newproduct));
}

export { createProdController }