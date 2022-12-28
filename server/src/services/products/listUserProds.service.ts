import AppDataSource from '../../data-source'
import { Product } from '../../entities/products.entities'
import { AppError } from '../../errors/appError'

const listUserProductsService = async (user_id: string) => {
    
    const prodRepository = AppDataSource.getRepository(Product)

    const prods = await prodRepository.find();

    const userProds = prods.filter((prod) => prod.user === user_id);

    if(!userProds){
        throw new AppError(404,"User do not have products")
    }

    return userProds;
}

export default listUserProductsService