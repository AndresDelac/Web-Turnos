import { error, time } from "console";
import { AppDataSource } from "../../config"
import { Appointment } from "../../entities/appointment"
import { AppointmentDto, Status } from "../../types";
import { describe } from "node:test";

const appointmentRepositotyLocal = AppDataSource.getRepository(Appointment)


async function getAllAppointmentsService (userId: string): Promise<Appointment[]>{
try {
    const appointments = await appointmentRepositotyLocal.find({
        where: userId ? { user: { id: Number(userId) } }: {},
        relations: ["user"]
    });
    if (appointments.length === 0){
        throw new Error("No appointments found")
    };
    return appointments;
} catch (error: any) {
    throw new Error(error)
}
}

async function getAppointmentByIdService (id: number){
try {
    const appointment = await appointmentRepositotyLocal.findOne({})
    if(!appointment){
        throw new Error("Appointment not found")
    }
    return appointment
} catch (error: any) {
    throw new Error(error)
}
}

async function postAppointmentService (appointment: AppointmentDto){
try {
    const user = await appointmentRepositotyLocal.findOne({
        where: { id: appointment.userId }
    });
    if(!user){
        throw new Error("User for this appointment not found")
    }
    const cita ={
        date: appointment.date,
        time: appointment.time,
        describe: appointment.description
    } 
    const newAppointment = await appointmentRepositotyLocal.save({
        cita,
        user: user
    });
    if (!newAppointment) {
        throw new Error("Appointment not created");
    }
    return newAppointment;
} catch (error: any) {
    throw new Error(error)
}
}

async function putAppointmentService (id: number){
    try {
        const appointment = appointmentRepositotyLocal.findOne({
            where: { id },
            relations: ["user"]
        });
        if (!appointment) {
            throw new Error("Appointment not found")
        };
        const updateAppointment = await appointmentRepositotyLocal.save({
            ...appointment, status: Status.CANCELED
        });
        if (!updateAppointment) {
            throw new Error("Appointment not cancelled")
        };
        return updateAppointment;
    } catch (error:any) {
        throw new Error(error)
    }
}

export {
    getAllAppointmentsService,
    getAppointmentByIdService,
    postAppointmentService,
    putAppointmentService,
}