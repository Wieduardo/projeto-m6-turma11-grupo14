import { Router } from 'express'
import { createUserController, deleteUserController, getUsersController, loginUserController, updateUserController } from '../controllers/users.controllers'

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', getUsersController)
userRoutes.patch('/:id', updateUserController)
userRoutes.delete('/:id', deleteUserController)
userRoutes.post('/login', loginUserController)
userRoutes.get('/user')

export default userRoutes