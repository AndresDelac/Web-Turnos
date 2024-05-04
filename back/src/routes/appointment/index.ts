import { Router } from "express";
import { getAllAppointments, getAppointmentByIdController, postAppointmentController, putAppointmentController } from "../../controllers/appointment";

const appointments: Router = Router()

appointments.get("/", getAllAppointments)

appointments.get("/:id", getAppointmentByIdController)

appointments.post("/register", postAppointmentController)

appointments.post("/login", putAppointmentController)

export default appointments