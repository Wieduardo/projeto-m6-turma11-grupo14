import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/users.interfaces";
import { IAddressRequest } from "../../interfaces/address.interfaces";
import { hash } from "bcrypt";
import { Address } from "../../entities/address.entity";

const updateUsersService = async ({id, name, password, cellphone, cpf, birthdate, is_seller}:IUserUpdate, { zip_code, country, state, city, district, street, number, complement }: IAddressRequest) => {
    
    const address= { zip_code, country, state, city, district, street, number, complement }

    let newPassword = password;
    if(password) {
        newPassword = await hash(password, 10);
    }

    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({where: {id: id}, relations: {address: true}});
    if(!user) throw new AppError(404, "User not found");
    
    const usersRepository = AppDataSource.getRepository(User);
    await usersRepository.update(id, {name, password: newPassword, cellphone, cpf, birthdate, is_seller})
    

    const addressRepository = AppDataSource.getRepository(Address)
    await addressRepository.update(user.address.id, { zip_code, country, state, city, district, street, number, complement })

    return {message: "User updated"};
}

export { updateUsersService };