import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUser, IUserRequest } from "../../interfaces/users.interfaces";
import { AppError } from "../../errors/appError";
import { hash } from "bcrypt";


const createUserService = async ({name, email, password, cellphone, address, cpf, birthdate, is_seller}: IUserRequest): Promise<User> =>{
    
    const userRepository = AppDataSource.getRepository(User);

    const userAlreadyExists = await userRepository.findOne({where: {email: email}});

    if(userAlreadyExists){
        throw new AppError(401,"User already exists");
    }

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