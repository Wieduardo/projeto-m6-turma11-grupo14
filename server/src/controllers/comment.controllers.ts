import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createCommentService from "../services/comments/createcomment.service"
import deleteCommentService from "../services/comments/deleteComment.service";
import listCommentService from "../services/comments/listComment.service";
import updateCommentService from "../services/comments/updateComment.service";

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

const updateCommentController = async (req: Request, res: Response) => {
    const {id} = req.params
    const {content} = req.body

    const comment = await updateCommentService({id, content})

    return res.status(200).json(comment)
}

const listCommentController = async (req: Request, res: Response) => {
    const {prod_id} = req.params

    const comments = await listCommentService(prod_id)

    res.status(200).json(comments)
}

export {createCommentController, deleteCommentController, updateCommentController, listCommentController}