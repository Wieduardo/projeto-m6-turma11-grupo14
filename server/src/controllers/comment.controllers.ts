import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createCommentService from "../services/comments/createcomment.service"
import deleteCommentService from "../services/comments/deletecomment.service";

const createCommentController = async ( req: Request, res: Response) =>{

    const data = req.body
    const newcomment = await createCommentService(data);
    return res.status(201).send(instanceToPlain(newcomment))
}

const deleteCommentController = async (req: Request, res: Response) =>{
    const {id} = req.params
    await deleteCommentService({id})
    return res.status(204).json("");
}

export {createCommentController, deleteCommentController}