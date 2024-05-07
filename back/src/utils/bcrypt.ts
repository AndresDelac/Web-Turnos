import bycrypt from 'bcrypt'

function encryptPassword(password: string): string {
    return bycrypt.hashSync(password, 10)
}

function comparePassword(password: string, hash: string): boolean {
    return bycrypt.compareSync(password, hash);
}

export{
    encryptPassword,
    comparePassword
}