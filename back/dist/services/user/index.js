"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putUserService = exports.postUserService = exports.getUserByIdService = exports.getAllUsersService = void 0;
const user_1 = require("../../db/user");
const credentials_1 = require("../credentials");
function getAllUsersService() {
    return "este es el servicio de los usuarios usuarios 3 36 20";
}
exports.getAllUsersService = getAllUsersService;
function getUserByIdService() {
    return "este es el id de tu usuario";
}
exports.getUserByIdService = getUserByIdService;
function postUserService(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const credentialId = (0, credentials_1.generateCredential)({
                username: user.username,
                password: user.password
            });
            const id = user.length + 1;
            const newUser = {
                id: id,
                name: user.name,
                email: user.email,
                birthdate: user.birthdate,
                dni_number: user.dni_number,
                appoinments: [],
                credentialsId: credentialId,
            };
            user_1.users.push(newUser);
            return newUser;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.postUserService = postUserService;
;
function putUserService() {
    return "este es el servicio de usuario put";
}
exports.putUserService = putUserService;
//# sourceMappingURL=index.js.map