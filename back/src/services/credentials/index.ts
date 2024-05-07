import { ICredential } from "../../types/credential";
import { encryptPassword, comparePassword } from "../../utils";
import { credentials } from "../../db/credentials";

function generateCredential({username, password}: ICredential){
    const hash: string = encryptPassword(password)
    const id: number = credentials.length + 1;
    const credential: ICredential = { id, username, password: hash };
    credentials.push(credential)
    return credential.id
}

export {
    generateCredential,
    comparePassword
}