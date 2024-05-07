"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_PASSWORD = exports.DB_NAME = exports.DB_USERNAME = exports.DB_PORT = exports.DB_HOST = exports.DB_TYPE = exports.DB = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./src/config/.env" });
exports.PORT = Number(process.env.PORT) || 3000;
exports.DB = process.env.DB;
const DB_TYPE = process.env.DB_TYPE || "postgres";
exports.DB_TYPE = DB_TYPE;
const DB_HOST = process.env.DB_HOST || "localhost";
exports.DB_HOST = DB_HOST;
const DB_PORT = process.env.DB_PORT || "54321";
exports.DB_PORT = DB_PORT;
const DB_USERNAME = process.env.DB_USERNAME || "postgres";
exports.DB_USERNAME = DB_USERNAME;
const DB_NAME = process.env.DB_NAME || "pilar_games";
exports.DB_NAME = DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD || "12345";
exports.DB_PASSWORD = DB_PASSWORD;
//# sourceMappingURL=envs.js.map