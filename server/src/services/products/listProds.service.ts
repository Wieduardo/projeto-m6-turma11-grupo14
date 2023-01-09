import AppDataSource from '../../data-source'
import { Product } from '../../entities/products.entity'

const listProdService = async () =>{

    const productRepository = AppDataSource.getRepository(Product)

    const products = await productRepository.find({relations: { user: true}})

    return products
}

export default listProdService