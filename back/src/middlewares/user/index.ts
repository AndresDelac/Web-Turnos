import { Request, Response, NextFunction } from "express";
import { CredentialDto, UserDto } from "../../types";
import { credentialRepository } from "../../repositories/credentials";

async function checkUserRegisterDto(
    req: Request,
    res: Response,
    next: NextFunction
){
    try {
        const { name, email, birthdate, dni_number, username, password } : UserDto = 
        req.body;
        const user: { [ key: string]: string | number | Date } = {
            name,
            email,
            birthdate,
            dni_number,
            username,
            password,
        };
        const missingKeys: string[] = []
        for (const key in user) {
            if (user[key] === undefined ){
                missingKeys.push(key)
            }
            if (missingKeys.length > 0) {
                throw new Error(`Missing keys: ${missingKeys.join(', ')}`)
            }
            
           await validateUsername(username)

        }
    } catch (error:any) {
        throw error  
    }
    next();
}

async function validateUsername(username:string) {
    try {
    const userExist = await credentialRepository.validateUser(username)
    if (userExist) {
        throw new Error(`Username ${username} already exists`)
    }
    
} catch (error) {
        throw error
    }
}

async function ChekUserLogin(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { username, password } : CredentialDto = req.body;
        const user: { [ key: string]: string | number | Date } = {
            username,
            password,
        };
        const missingKeys: string[] = [] 
        for (const key in user) {
            if (user[key] === undefined ){
                missingKeys.push(key)
            }
            if (missingKeys.length > 0) {
                throw new Error(`Missing keys: ${missingKeys.join(', ')}`)
            }
            
            
        }
    } catch (error:any) {
        throw error
    }

    next();
}

export {
    checkUserRegisterDto,
    ChekUserLogin,
}