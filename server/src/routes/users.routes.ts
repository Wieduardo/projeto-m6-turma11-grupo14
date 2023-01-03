import { Router } from 'express'
import { createUserController } from '../controllers/users.controllers'

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('')
userRoutes.patch('')
userRoutes.delete('')
userRoutes.post('/login')
userRoutes.get('/user')

export default userRoutes