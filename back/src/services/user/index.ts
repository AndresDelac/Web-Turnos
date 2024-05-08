import { InsertResult } from "typeorm"
import { AppDataSource } from "../../config"
// import { users } from "../../db/user"
import { User } from "../../entities/user"
import { IUser, UserDto } from "../../types/user"
import { checkCredential, generateCredential } from "../credentials" 
import { ICredential } from "../../types"

async function getAllUsersService (): Promise<User[]>{
   try {
     const users = await AppDataSource.manager.getRepository(User).find({
        relations: ["credentials", "appointment"],
     });
     return users;
   } catch (error: any) {
    throw new Error (error)
   }
}

async function getUserByIdService (id: number): Promise<User | null>{
   try {
    const user = await AppDataSource.manager.findOneBy(User, { id });
    
    return user
   }catch (error: any) {
    throw new Error(error)
   }
}

async function postUserService (user: UserDto): Promise<User | InsertResult>{
    try{
        const credentialId = await generateCredential({
        username: user.username,
        password: user.password 
    });
    const newUser = AppDataSource.manager.save(User, {
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        dni_number: user.dni_number,
        credentials: credentialId,
    });
    return newUser
}       
catch(error: any ){
    throw new Error(error)
    }
};


async function putUserService (credentials: ICredential){
    try {
        return await checkCredential(credentials);
    } catch (error: any) {
        throw new Error(error)
    }
}

export {
    getAllUsersService,
    getUserByIdService,
    postUserService,
    putUserService,
}