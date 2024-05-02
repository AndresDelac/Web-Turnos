import { Router, Request, Response } from "express";
import { getAllServices, postServiceController, getServicesByIdController, putUserController } from "../../controllers/service";

const appointments: Router = Router()

appointments.get("/", getAllServices)

appointments.get("/:id", getServicesByIdController)

appointments.post("/register", postServiceController)

appointments.post("/login", putUserController)

export default appointments