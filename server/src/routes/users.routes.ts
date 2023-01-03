import { Router } from 'express'
import { createUserController, deleteUserController, getUsersController, updateUserController } from '../controllers/users.controllers'

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', getUsersController)
userRoutes.patch('/:id', updateUserController)
userRoutes.delete('/:id', deleteUserController)
userRoutes.post('/login')
userRoutes.get('/user')

export default userRoutes