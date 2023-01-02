import AppDataSource from '../../data-source'
import { Product } from '../../entities/products.entity'
import { AppError } from '../../errors/appError'
import { IProductId } from '../../interfaces/products.interfaces'

const listOneProdService = async ({prod_id}: IProductId) => {
    
    const prodRepository = AppDataSource.getRepository(Product)

    const prod = await prodRepository.findOne({where: {id: prod_id}})

    if(!prod){
        throw new AppError(404,"Product does not exist")
    }

    return prod
}

export default listOneProdService