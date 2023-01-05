import { Router } from 'express'
import { createUserController, deleteUserController, getUserController, getUsersController, loginUserController, updateUserController } from '../controllers/users.controllers'
import { UserAuthMiddleware } from '../middlewares/userAuth.middleware'

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', getUsersController)
userRoutes.patch('', UserAuthMiddleware, updateUserController)
userRoutes.delete('', UserAuthMiddleware, deleteUserController)
userRoutes.post('/login', loginUserController)
userRoutes.get('/user', UserAuthMiddleware, getUserController)

export default userRoutes