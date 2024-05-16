import { Router } from "express";
import { getAllAppointments, getAppointmentByIdController, postAppointmentController, putAppointmentController } from "../../controllers/appointment";
import { checkAppointmentDto } from "../../middlewares/appoinment";

const appointments: Router = Router()

appointments.get("/", getAllAppointments)

appointments.get("/:id", getAppointmentByIdController)

appointments.post("/schedule", checkAppointmentDto, postAppointmentController)

appointments.put("/cancel/:id", putAppointmentController)

export default appointments