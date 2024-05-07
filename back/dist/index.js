"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = require("./server");
const config_1 = require("./config");
config_1.AppDataSource.initialize()
    .then(() => {
    console.log("DataBase connected");
    (0, server_1.serverInitialize)();
})
    .catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map