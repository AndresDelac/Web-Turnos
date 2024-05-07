import dotenv from "dotenv"
dotenv.config({ path: "./src/config/.env" })

export const PORT = Number(process.env.PORT) || 3000
export const DB = process.env.DB 
const DB_TYPE = process.env.DB_TYPE || "postgres" 
const DB_HOST = process.env.DB_HOST || "localhost"
const DB_PORT = process.env.DB_PORT || "54321"
const DB_USERNAME = process.env.DB_USERNAME || "postgres"
const DB_NAME = process.env.DB_NAME || "pilar_games"
const DB_PASSWORD = process.env.DB_PASSWORD || "12345"

export{
    DB_TYPE,
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_NAME,
    DB_PASSWORD
}