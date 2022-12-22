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

    const product = new Product();
	product.name = name;
    product.description = description;
    product.year = year;
    product.kilometers = kilometers;
    product.ad_type = ad_type;
    product.price = price;
    product.user = user;
    product.vehicle_type = vehicle_type;
    product.images = images;
	

	productsRepository.create(product);
	await productsRepository.save(product);

	return product;

}

export default createProdService