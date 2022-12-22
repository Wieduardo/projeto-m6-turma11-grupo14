import { Router } from 'express'
import { createProdController } from '../controllers/products.controllers'

const productRoutes = Router()

productRoutes.get('')
productRoutes.get('/:prod_id')
productRoutes.post('', createProdController)
productRoutes.patch('/:prod_id')
productRoutes.delete('/:prod_id')

export default productRoutes