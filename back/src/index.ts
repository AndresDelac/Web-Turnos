import "reflect-metadata"
import { serverInitialize } from "./server"
import { AppDataSource } from "./config"

AppDataSource.initialize()
.then (()=> {
    console.log("DataBase connected");
    serverInitialize()
})
.catch ((err) => {
    console.error(err);
})