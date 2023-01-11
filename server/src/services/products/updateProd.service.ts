import AppDataSource from '../../data-source'
import { AppError } from '../../errors/appError'
import { Product } from '../../entities/products.entity'
import { IProductPatch } from '../../interfaces/products.interfaces'
import { User } from '../../entities/user.entity'

const patchProdService = async ({
    id,
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

    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({where: {id: id}, relations: {products: true}});
    if(!user) throw new AppError(404, "User not found");
    
    const product = user.products.find(request => request.id === prod_id);
    if(!product) throw new AppError(404, "product not found");

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