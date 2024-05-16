import { DataSource } from "typeorm";
import {
    DB_TYPE,
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_NAME,
    DB_PASSWORD
} from "./envs"
import { Credential } from "../entities/credential";
import { User } from "../entities/user";
import { Appointment } from "../entities/appointment";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: 54321,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    // dropSchema: true,
    synchronize: true,
    logging: true,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
})