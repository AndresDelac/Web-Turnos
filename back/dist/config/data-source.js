"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const credential_1 = require("../entities/credential");
const user_1 = require("../entities/user");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: 54321,
    username: envs_1.DB_USERNAME,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [user_1.User, credential_1.Credential],
    subscribers: [],
    migrations: [],
});
//# sourceMappingURL=data-source.js.map