import AppDataSource from '../../data-source'
import { AppError } from '../../errors/appError'
import { Product } from '../../entities/products.entities'
import { IProductId } from '../../interfaces/products.interfaces'

const deleteProdService = async ({prod_id}: IProductId): Promise<void> =>{
    
    const prodRepository = AppDataSource.getRepository(Product)

    const prod = await prodRepository.findOne({where: {id: prod_id}})

    if(!prod){
        throw new AppError(404,"Product does not exist")
    }

    await prodRepository.delete({id:prod_id})

}

export default deleteProdService