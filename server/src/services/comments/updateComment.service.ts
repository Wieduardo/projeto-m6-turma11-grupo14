import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { AppError } from "../../errors/appError";
import { ICommentUpdate } from "../../interfaces/comment.interfaces";


const updateCommentService = async ({id, content}: ICommentUpdate) =>{

    const commentRepository = AppDataSource.getRepository(Comment)
    const {affected} = await commentRepository.update(id, {content})
    if(affected === 0) throw new AppError(404, "Comment not found")

    return {message: "Comment updated"}
}

export default updateCommentService