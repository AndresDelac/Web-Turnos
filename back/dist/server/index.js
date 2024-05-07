"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverInitialize = void 0;
const server_1 = __importDefault(require("../server/server"));
const envs_1 = require("../config/envs");
function serverInitialize() {
    server_1.default.listen(envs_1.PORT, () => {
        console.log(`server listening on port ${envs_1.PORT}`);
    });
}
exports.serverInitialize = serverInitialize;
//# sourceMappingURL=index.js.map