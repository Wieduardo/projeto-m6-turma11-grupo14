import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUser, IUserRequest } from "../../interfaces/users.interfaces";
import { IAddressRequest } from "../../interfaces/address.interfaces";
import { AppError } from "../../errors/appError";
import { hash } from "bcrypt";
import { Address } from "../../entities/address.entity";


const createUserService = async ({name, email, password, cellphone, cpf, birthdate, is_seller}: IUserRequest, { zip_code, country, state, city, district, street, number, complement }: IAddressRequest): Promise<User> =>{
    
    const userRepository = AppDataSource.getRepository(User);
    const addressRepository = AppDataSource.getRepository(Address);

    const userAlreadyExists = await userRepository.findOne({where: {email: email}});

    if(userAlreadyExists){
        throw new AppError(401,"User already exists");
    }

    const address = addressRepository.create({
        zip_code, country, state, city, district, street, number, complement
    })

    await addressRepository.save(address)

    const hashedPassword = await hash(password, 10);

    const user = userRepository.create({
        name,
        email,
        password: hashedPassword,
        cellphone,
        address,
        cpf,
        birthdate,
        is_seller
    })

    await userRepository.save(user);

    return user;

}

export default createUserService