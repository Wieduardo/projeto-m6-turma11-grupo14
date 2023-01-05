import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUserLogin } from "../../interfaces/users.interfaces";
import "dotenv/config";

const loginUserService = async ({email, password} : IUserLogin)=>{

    if(!email || !password) {
        throw new AppError(400, "Request in wrong format");
    }

    const userRepository = AppDataSource.getRepository(User) 

    const user = await userRepository.findOne({where: {email: email}})

    if (!user) {
        throw new AppError(404, "Wrong email/password")
    }

    if(!bcrypt.compareSync(password, user.password)){
        throw new AppError(404, "Wrong email/password")
    } 

    if(!user.isActive) throw new AppError(400, "user is not active");

    const token = jwt.sign({id: user.id, userType: "user"}, String(process.env.SECRET_KEY),{expiresIn: '1d'})


    return {"token":token};

}

export default loginUserService