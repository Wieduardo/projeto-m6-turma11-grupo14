import AppDataSource from '../../data-source'
import { AppError } from '../../errors/appError'
import { Product } from '../../entities/products.entity'
import { IProductPatch } from '../../interfaces/products.interfaces'

const patchProdService = async ({
    prod_id, 
    name, 
    description,
    year,
    kilometers, 
    ad_type,  
    price, 
    vehicle_type,
    images 
}: IProductPatch) =>{

    const prodRepository = AppDataSource.getRepository(Product)

    const { affected } = await prodRepository.update(prod_id, {
        name, 
        description,
        year,
        kilometers, 
        ad_type,  
        price, 
        vehicle_type,
        images})

    if(affected === 0) throw new AppError(404, "Product not found");

    return {message: "Product updated"};

}

export default patchProdService;