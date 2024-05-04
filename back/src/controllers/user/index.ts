import { Request, Response } from "express";
import { getAllUsersService, getUserByIdService, postUserService, putUserService } from "../../services/user";

function getAllUsers (req: Request, res:Response){
    res.status(200).send("estos son los usuarios")
}

function getUserByIdController(req:Request, res:Response){
    res.status(200).send("este es id de tu usuario")
}

function postUserController(req:Request, res:Response){
    const service = req.body;
    res.send(201).json({message: "este es el controlador de post", body: service})
}

function putUserController (req:Request, res:Response){
    const user = req.body
    res.send(201).json({message: "este es el servicio de put User", body:user})
}

export {
    getAllUsers,
    getUserByIdController,
    postUserController,
    putUserController,
}