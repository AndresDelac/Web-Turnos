import { IAppointments } from "./appointments"
import { ICredential } from "./credential"

export interface IUser{
    id?: number,
    name: string,
    email: string,
    birthdate: Date,
    dni_number:number, 
    appoinments: IAppointments[],
    credentialsId: ICredential["id"],

}