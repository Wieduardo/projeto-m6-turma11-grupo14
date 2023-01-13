import AppDataSource from '../../data-source'
import { Product } from '../../entities/products.entity'
import { AppError } from '../../errors/appError'

const listUserProductsService = async (user_id: any) => {
    
    const prodRepository = AppDataSource.getRepository(Product)

    const prods = await prodRepository.find({relations: { user: true}});

    const userProds = prods.filter((prod) => prod.user.id === user_id);

    if(!userProds){
        throw new AppError(404,"User do not have products")
    }

    return userProds;
}

export default listUserProductsService