import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/users.interfaces";
import { hash } from "bcrypt";

const updateUsersService = async ({id, name, password, cellphone, address, cpf, birthdate, is_seller}:IUserUpdate) => {
    
    let newPassword = password;
    if(password) {
        newPassword = await hash(password, 10);
    }
    
    const usersRepository = AppDataSource.getRepository(User);
    const { affected } = await usersRepository.update(id, {name, password: newPassword, cellphone, address, cpf, birthdate, is_seller})
    if(affected === 0) throw new AppError(404, "user not found");

    return {message: "User updated"};
}

export { updateUsersService };