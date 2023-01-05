import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { IUserId } from '../../interfaces/users.interfaces'
import { AppError } from '../../errors/appError'

const getUserService = async ({id}: IUserId): Promise<any> =>{
    
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({where: {id: id}})

    return user

}

export default getUserService