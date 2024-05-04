import { Request, Response } from "express";
import { getAllServiceService, getServiceByIdService, postServiceService, putServiceService } from "../../services/services";

function getAllServices (req: Request, res:Response){
    res.status(200).send("todas los serrvicios")
}

function getServicesByIdController(req:Request, res:Response){
    res.status(200).send("este es id del servicio")
}

function postServiceController(req:Request, res:Response){
    const service = req.body;
    res.send(201).json({message: "este es servcio de post", body: service})
}

function putServiceController (req:Request, res:Response){
    const user = req.body
    res.send(201).json({message: "este es el servicio de put ", body:user})
}

export {
    getAllServices,
    getServicesByIdController,
    postServiceController,
    putServiceController,
}