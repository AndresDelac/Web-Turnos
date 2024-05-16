import { Router } from "express";
import { getAllUsers, getUserByIdController, postUserController, putUserController } from "../../controllers/user";
import { checkUserRegisterDto, ChekUserLogin } from "../../middlewares/user";
const routeUser: Router = Router()

routeUser.get("/", getAllUsers)

routeUser.get("/:id", getUserByIdController)

routeUser.post("/register", checkUserRegisterDto, postUserController)

routeUser.post("/login", ChekUserLogin, putUserController)

export default routeUser;
