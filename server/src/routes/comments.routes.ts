import { Router } from 'express'
import { createCommentController, deleteCommentController, listCommentController, updateCommentController } from '../controllers/comment.controllers'

const commentRoutes = Router()

commentRoutes.post('', createCommentController)
commentRoutes.get('/prod/:prod_id', listCommentController)
commentRoutes.patch('/:comment_id', updateCommentController)
commentRoutes.delete('/:comment_id', deleteCommentController)


export default commentRoutes