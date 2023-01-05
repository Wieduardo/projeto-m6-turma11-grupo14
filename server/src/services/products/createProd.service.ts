import AppDataSource from "../../data-source";
import { Product } from "../../entities/products.entity";
import { User } from "../../entities/user.entity";
import { IProductRequest } from "../../interfaces/products.interfaces";

const createProdService = async ({
    name,
    description,
    year,
    kilometers,
    ad_type,
    price,
    user,
    vehicle_type,
    images}: IProductRequest) =>{

    const productsRepository = AppDataSource.getRepository(Product);
    const usersRepository= AppDataSource.getRepository(User);

    const usuario = await usersRepository.findOneBy({
        id: user
    })


	const product = productsRepository.create({
        name,
        description,
        year,
        kilometers,
        ad_type,
        price,
        user: usuario!,
        vehicle_type,
        images,
    });
        
	await productsRepository.save(product);

	return product;

}

export default createProdService