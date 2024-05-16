import { log } from "console";
import { AppDataSource } from "../../config"
import { Appointment } from "../../entities/appointment"
import { AppointmentDto, Status } from "../../types";
import { User } from "../../entities/user";

const appointmentRepositoryLocal = AppDataSource.getRepository(Appointment)


async function getAllAppointmentsService (userId: string): Promise<Appointment[]>{
try {
    const appointment = await appointmentRepositoryLocal.find({
        where: userId ? { user: { id: Number(userId) } }: {},
        relations: ["user"]
    });
    if (appointment.length === 0){
        throw new Error("No appointments found")
    };
    return appointment;
} catch (error: any) {
    throw new Error(error)
}
}

async function getAppointmentByIdService (id: number){
try {
    const appointment = await AppDataSource.getRepository(Appointment).findOne({
        where : {id},
        relations: ["user"]
    })
    if(!appointment){
        throw new Error("Appointment not found")
    }
    return appointment
} catch (error: any) {
    throw new Error(error)
}
}

async function postAppointmentService(appointment: AppointmentDto) {
    
    try {
        const user = await AppDataSource.getRepository(User).findOne({
            where: { id: appointment.userId },
            relations: ["appointments"]
        });
        if (!user) {
            throw new Error(`User for this appointment not found ${user}`);
        }
        const newAppointment = await appointmentRepositoryLocal.save({
            date: appointment.date,
            time: appointment.time,
            description: appointment.description,
            user: user
        });
        if (!newAppointment) {
            throw new Error("Appointment not created");
        }
        console.log(newAppointment);
        
        return newAppointment;
    } catch (error: any) {
        throw new Error(error);
    }
}


async function putAppointmentService(id: number) {
    try {
        const appointment = await appointmentRepositoryLocal.findOne({
            where: { id },
            relations: ["user"]
        });

        if (!appointment) {
            throw new Error("Appointment not found");
        }

        appointment.status = Status.CANCELED;
        const updateAppointment = await appointmentRepositoryLocal.save(appointment);

        if (!updateAppointment) {
            throw new Error("Appointment not cancelled");
        }

        return updateAppointment;
    } catch (error: any) {
        throw new Error(error);
    }
}


export {
    getAllAppointmentsService,
    getAppointmentByIdService,
    postAppointmentService,
    putAppointmentService,
}