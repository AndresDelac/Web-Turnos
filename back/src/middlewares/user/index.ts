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

            next();
        }
    } catch (error:any) {
      res.status(500).json({ message: error.message })  
    }
}

async function validateUsername(username:string) {
    const isRegistered = await credentialRepository.validateUser(username)
    if (!isRegistered) {
     throw new Error("User already registered")

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

            await validateUsername(username)
            
            next();
        }
    } catch (error:any) {
        res.status(500).json({ message: error.message })
    }
}

export {
    checkUserRegisterDto,
    ChekUserLogin,
}