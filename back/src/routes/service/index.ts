import { Router, Request, Response } from "express";

const serviceRoute: Router = Router()

serviceRoute.get("/", (req:Request, res:Response)=>{
    res.status(200).send("los servicios se subiran proximamente")
})

serviceRoute.get("/:id", ()=>{})

serviceRoute.post("/register", ()=>{})

serviceRoute.post("/login", ()=>{})

export default serviceRoute;