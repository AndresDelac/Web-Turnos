import { users } from "../../db/user"
import { IUser } from "../../types/user"
import { generateCredential } from "../credentials" 

function getAllUsersService (){
    return "este es el servicio de los usuarios usuarios 3 36 20"
}

function getUserByIdService (){
    return "este es el id de tu usuario"
}

async function postUserService (user: any): Promise<IUser>{
    try{
        const credentialId = generateCredential({
        username: user.username,
        password: user.password 
    })
    const id = user.length + 1;
    const newUser: IUser = {
        id: id,
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        dni_number: user.dni_number,
        appoinments: [],
        credentialsId: credentialId,
    };
    users.push(newUser)
    return newUser
}       
catch(error: any ){
    throw new Error(error)
    }
};


function putUserService (){
    return "este es el servicio de usuario put"
}

export {
    getAllUsersService,
    getUserByIdService,
    postUserService,
    putUserService,
}