import { Request, Response } from "express";
import { getService, createService, deleteService } from "../services/userService"

export const getUsers = async (req: Request, res: Response) => {
    res.status(200).json("tranqui bro empezamos el proyecto hace dos dias");
    
}

export const createUser = async () => {}

export const deleteUser = async () => {}
