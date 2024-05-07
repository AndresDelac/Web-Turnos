"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.generateCredential = void 0;
const utils_1 = require("../../utils");
Object.defineProperty(exports, "comparePassword", { enumerable: true, get: function () { return utils_1.comparePassword; } });
const credentials_1 = require("../../db/credentials");
function generateCredential({ username, password }) {
    const hash = (0, utils_1.encryptPassword)(password);
    const id = credentials_1.credentials.length + 1;
    const credential = { id, username, password: hash };
    credentials_1.credentials.push(credential);
    return credential.id;
}
exports.generateCredential = generateCredential;
//# sourceMappingURL=index.js.map