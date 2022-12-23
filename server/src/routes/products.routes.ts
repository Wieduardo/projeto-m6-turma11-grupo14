import { Router } from 'express'
import { createProdController, listProdController, retrieveUserController } from '../controllers/products.controllers'

const productRoutes = Router()

productRoutes.post('', createProdController)
productRoutes.get('', listProdController)
productRoutes.get('/:prod_id', retrieveUserController)
productRoutes.patch('/:prod_id')
productRoutes.delete('/:prod_id')

export default productRoutes