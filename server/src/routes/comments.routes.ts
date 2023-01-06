import { Router } from 'express'
import { createCommentController } from '../controllers/comment.controllers'

const commentRoutes = Router()

commentRoutes.post('', createCommentController)
commentRoutes.get('/:comment_id')
commentRoutes.patch('/:comment_id')
commentRoutes.delete('/:comment_id')

export default commentRoutes