import { Router,  } from "express";
import { getAllServiceService, getServiceByIdService, postServiceService, putServiceService } from "../../services/services";

const serviceRoute: Router = Router()

serviceRoute.get("/", )

serviceRoute.get("/:id", ()=>{})

serviceRoute.post("/register", ()=>{})

serviceRoute.post("/login", ()=>{})

export default serviceRoute;