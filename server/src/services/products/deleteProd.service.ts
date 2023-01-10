import AppDataSource from '../../data-source'
import { AppError } from '../../errors/appError'
import { Product } from '../../entities/products.entity'
import { IProductId } from '../../interfaces/products.interfaces'
import { IUserId } from '../../interfaces/users.interfaces'
import { User } from '../../entities/user.entity'

const deleteProdService = async (userId: any,{prod_id}: IProductId): Promise<void> =>{

    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOne({where: {id: userId}, relations: {products: true}}) 
    if(!user) throw new AppError(404, "User not found");

    const prodRepository = AppDataSource.getRepository(Product)
    const product = user.products.find(product => product.id === prod_id);
    if(!product) throw new AppError(404, "Product not found");

    await prodRepository.delete(prod_id)

}

export default deleteProdService