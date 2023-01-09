import AppDataSource from "../../data-source"
import { Comment } from "../../entities/comment.entity"
import { AppError } from "../../errors/appError"


const listCommentService = async (prod_id: any) => {

    const commentRepository = AppDataSource.getRepository(Comment)

    const comments = await commentRepository.find()

    const commentsProd = comments.filter((comment) => comment.product === prod_id)

    if(!commentsProd){
        throw new AppError(404, "Product do not have comments")
    }

    return commentsProd

}

export default listCommentService