import { Router } from "express";
import { getAllUsers, getUserByIdController, postUserController, putUserController } from "../../controllers/user";
const routeUser: Router = Router()

routeUser.get("/", getAllUsers)

routeUser.get("/:id", getUserByIdController)

routeUser.post("/register", postUserController)

routeUser.post("/login", putUserController)

export default routeUser;
