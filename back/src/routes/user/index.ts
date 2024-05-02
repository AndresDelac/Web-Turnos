import { Router, Request, Response } from "express";

const routeUser: Router = Router()

routeUser.get("/", (req:Request, res:Response)=>{
    res.status(200).send("todos los usuarios se subiran proximamente")
})

routeUser.get("/:id", ()=>{})

routeUser.post("/register", ()=>{})

routeUser.post("/login", ()=>{})

export default routeUser;
