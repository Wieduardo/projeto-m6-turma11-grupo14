import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createCommentService from "../services/comments/createcomment.service"

const createCommentController = async ( req: Request, res: Response) =>{

    const data = req.body
    const newcomment = await createCommentService(data);
    return res.status(201).send(instanceToPlain(newcomment))
}

export {createCommentController}