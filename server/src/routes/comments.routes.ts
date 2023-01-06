import { Router } from 'express'
import { createCommentController, deleteCommentController, updateCommenteController } from '../controllers/comment.controllers'

const commentRoutes = Router()

commentRoutes.post('', createCommentController)
commentRoutes.get('/:comment_id')
commentRoutes.patch('/:comment_id', updateCommenteController)
commentRoutes.delete('/:comment_id', deleteCommentController)

export default commentRoutes