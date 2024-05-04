import { Request, Response } from "express";
import { getAllAppointmentsService, getAppointmentByIdService, postAppointmentService, putAppointmentService } from "../../services/appointments";

function getAllAppointments (req: Request, res:Response){
    res.status(200).send("todas las citas")
}

function getAppointmentByIdController(req:Request, res:Response){
    res.status(200).send("este es id de tus citas")
}

function postAppointmentController(req:Request, res:Response){
    const service = req.body;
    res.send(201).json({message: "este es servcio de post", body: service})
}

function putAppointmentController (req:Request, res:Response){
    const user = req.body
    res.send(201).json({message: "este es el servicio de put Appointment", body:user})
}

export {
    getAllAppointments,
    getAppointmentByIdController,
    postAppointmentController,
    putAppointmentController,
}