import { Router } from 'express'
import { createProdController } from '../controllers/products.controllers'

const productRoutes = Router()

productRoutes.get('')
productRoutes.get('')
productRoutes.post('', createProdController)
productRoutes.patch('')
productRoutes.delete('')

export default productRoutes