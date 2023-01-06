import AppDataSource from "../../data-source"
import { ICommentId } from "../../interfaces/comment.interfaces"
import {Comment} from "../../entities/comment.entity"
import { AppError } from "../../errors/appError"

const deleteCommentService = async ({id}: ICommentId): Promise<void> =>{

    const commentRepository = AppDataSource.getRepository(Comment)

    const comment = await commentRepository.findOne({where: {id:id}})

    if(!comment){
        throw new AppError(404,"Comment does not exist")
    }

    await commentRepository.delete({id:id})
}

export default deleteCommentService