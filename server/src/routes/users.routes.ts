import { Router } from 'express'
import { createUserController, deleteUserController } from '../controllers/users.controllers'

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('')
userRoutes.patch('')
userRoutes.delete('/:id', deleteUserController)
userRoutes.post('/login')
userRoutes.get('/user')

export default userRoutes