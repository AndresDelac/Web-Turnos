import { strict } from "assert"
import { IUser } from "./user"

export enum Status{
    ACTIVE = 'ACTIVE',
    CANCELED = 'CANCELED'
}

export interface IAppointments {
    id: number,
    date: number,
    time: number,
    description: string,
    status: Status,
    userId: IUser["id"],
    serviceId: number
}

export class AppointmentDto{
    date: Date
    time: number
    description: string
    userId:number
}