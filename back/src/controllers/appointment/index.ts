import { Request, Response } from "express";
import { getAllAppointmentsService, getAppointmentByIdService, postAppointmentService, putAppointmentService } from "../../services/appointments";
import { AppointmentDto } from "../../types";

async function getAllAppointments (req: Request, res:Response){
   try {
    const { userId } = req.query
    const appointments = await getAllAppointmentsService(userId as string);
    res.status(200).json(appointments)
   } catch (error:any) {
    throw new Error(error)
   }
}

async function getAppointmentByIdController(req:Request, res:Response){
    try {
        const { id } = req.params
        const appointment = await getAppointmentByIdService(Number(id));
        res.status(200).json(appointment)
    } catch (error:any) {
        res.status(404).json({ message: error.message })
    }
}

async function postAppointmentController(req:Request, res:Response){
    try {
        const appointment : AppointmentDto = req.body;
        const newAppointment = await postAppointmentService(appointment);
        res.status(201).json({ message: "Appointment created", cita: newAppointment });
    } catch (error:any) {
        
    }
}

async function putAppointmentController (req:Request, res:Response){
    try {
        const { id } = req.params;
        const appointment = await putAppointmentService(Number(id));
        res.status(201).json({ message: "Appointment updated", date: appointment })

    } catch (error:any) {
        res.status(404).json({ message: error.message })
    }
}

export {
    getAllAppointments,
    getAppointmentByIdController,
    postAppointmentController,
    putAppointmentController,
}