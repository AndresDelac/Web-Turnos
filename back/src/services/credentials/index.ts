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

async function checkCredential({username, password}: ICredential): Promise<number | undefined> {
    try {
        const credential = await AppDataSource.manager.findOneBy(Credential, { username });

        if (!credential) {
            throw new Error("User not found")
        }
        const isValid = comparePassword(password, credential.pasaword);
        if (!isValid) {
            throw new Error("Invalid credentials")
        }
        return credential.id
    } catch (error: any) {
        throw new Error(error)
    }
}

export {
    generateCredential,
    comparePassword,
    checkCredential
}