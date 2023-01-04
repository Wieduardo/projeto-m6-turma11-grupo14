import AppDataSource from "../../data-source"
import { Comment } from "../../entities/comment.entity"
import { Product } from "../../entities/products.entity"
import { User } from "../../entities/user.entity"
import { ICommentRequest } from "../../interfaces/comment.interfaces"

const createCommentService = async ({content, user, product}: ICommentRequest) => {
    
    const commentRepository = AppDataSource.getRepository(Comment)
    const usersRepository= AppDataSource.getRepository(User);
    const productsRepository = AppDataSource.getRepository(Product);

    const usuario = await usersRepository.findOneBy({
        id: user
    })

    const produto = await productsRepository.findOneBy({
        id: product
    })

    const comment = commentRepository.create({
        content,
        user:usuario!,
        product:produto!
    })

    await commentRepository.save(comment)

    return comment;
}

export default createCommentService