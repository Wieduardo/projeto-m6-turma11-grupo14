import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { IUserId } from '../../interfaces/users.interfaces'
import { AppError } from '../../errors/appError'

const deleteUserService = async ({id}: IUserId): Promise<void> =>{
    
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({where: {id: id}})

    if(!user){
        throw new AppError(404,"User does not exist")
    }

    if(user?.isActive == false){
        throw new AppError(400,"Inactive User")
    }

    await userRepository.update({id: id},{
            isActive: false
        }
    )

}

export default deleteUserService