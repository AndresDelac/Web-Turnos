import { IUser } from "./user"

export enum Status{
    ACTIVE = 'ACTIVE',
    CANCELED = 'CANCELED'
}

export interface IAppointments {
    id: number,
    date: string,
    time: string,
    description: string,
    status: Status,
    userId: IUser["id"],
    serviceId: number
}

export class AppointmentDto{
    userId: IUser["id"]
    date: string
    time: string
    description: string
}