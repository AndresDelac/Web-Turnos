import { Request, Response } from "express";
import { getAllUsersService, getUserByIdService, postUserService, putUserService } from "../../services/user";
import { CredentialDto } from "../../types";

async function getAllUsers (req: Request, res:Response){
    try {
        const users = await getAllUsersService();
        res.status(200).json(users)
       } catch (error: any) {
        res.status(404).json({ message: "Users not found" })
       }
}

 async function getUserByIdController(req:Request, res:Response){
    try {
        const {id} = req.params;
        const user = await getUserByIdService(Number(id));
        if (user) res.status(200).json(user)
            else res.status(404).json({ message: "User not Found" })
       } catch (error: any) {
        res.status(404).json({ message: error.message })
       }
}

async function postUserController(req:Request, res:Response){
    try {
        const user = req.body;
        const newUser = await postUserService(user);
        res.status(201).json({ message: "User registered", newUser });

    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

async function putUserController (req:Request, res:Response){
    try {
        const credentials: CredentialDto = req.body;
        const id = await putUserService(credentials);
        res.status(201).json({ message: "User logged", id })
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

export {
    getAllUsers,
    getUserByIdController,
    postUserController,
    putUserController,
}