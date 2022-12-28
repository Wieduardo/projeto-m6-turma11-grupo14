import { Router } from 'express'
import { createProdController, deleteProdController, listProdController, listUserProductsController, patchProdController, retrieveUserController } from '../controllers/products.controllers'

const productRoutes = Router()

productRoutes.post('', createProdController)
productRoutes.get('', listProdController)
productRoutes.get('/:prod_id', retrieveUserController)
productRoutes.get("/user/:user_id", listUserProductsController)
productRoutes.patch('/:prod_id', patchProdController)
productRoutes.delete('/:prod_id', deleteProdController)

export default productRoutes