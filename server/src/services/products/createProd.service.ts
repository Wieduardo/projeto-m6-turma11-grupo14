import AppDataSource from "../../data-source";
import { Product } from "../../entities/products.entities";
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

	const product = productsRepository.create({
        name,
        description,
        year,
        kilometers,
        ad_type,
        price,
        user,
        vehicle_type,
        images});
        
	await productsRepository.save(product);

	return product;

}

export default createProdService