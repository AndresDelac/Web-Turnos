import { ICredential } from "../../types/credential";
import { encryptPassword, comparePassword } from "../../utils";
import { credentials } from "../../db/credentials";
import { AppDataSource } from "../../config";
import { Credential } from "../../entities/credential";

async function generateCredential({username, password}: ICredential): Promise<number| undefined>{
    try {
        const hash: string = encryptPassword(password)
        const cred = await AppDataSource.manager.save(Credential, {
            username,
            password: hash,
        });
        return cred.id
    } catch (error: any) {
        throw new Error(error)
    }
}

async function checkCredential({username, password}: ICredential): Promise<Partial<Credential>> {
    try {
        const credential = await AppDataSource.getRepository(Credential).findOne({
            where: { username },
            select: [ "id", "password" ]
        });
        if (!credential) {
            throw new Error("User not found")
        }
        const isValid = comparePassword(password, credential.password); 
        if (!isValid) {
            throw new Error("Invalid credentials")
        }
        return { id: credential.id, username: credential.username };
    } catch (error: any) {
        throw new Error(error)
    }
}

export {
    generateCredential,
    comparePassword,
    checkCredential
}