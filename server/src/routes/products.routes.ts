import { Router } from 'express'
import { createProdController, deleteProdController, listProdController, listUserProductsController, patchProdController, retrieveUserController } from '../controllers/products.controllers'
import { UserAuthMiddleware } from '../middlewares/userAuth.middleware'

const productRoutes = Router()

productRoutes.post('', UserAuthMiddleware, createProdController)
productRoutes.get('', listProdController)
productRoutes.get('/:prod_id', retrieveUserController)
productRoutes.get("/user/:user_id", listUserProductsController)
productRoutes.patch('/:prod_id', UserAuthMiddleware, patchProdController)
productRoutes.delete('/:prod_id', UserAuthMiddleware, deleteProdController)

export default productRoutes