"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putUserController = exports.postUserController = exports.getUserByIdController = exports.getAllUsers = void 0;
function getAllUsers(req, res) {
    res.status(200).send("estos son los usuarios");
}
exports.getAllUsers = getAllUsers;
function getUserByIdController(req, res) {
    res.status(200).send("este es id de tu usuario");
}
exports.getUserByIdController = getUserByIdController;
function postUserController(req, res) {
    const service = req.body;
    res.send(201).json({ message: "este es el controlador de post", body: service });
}
exports.postUserController = postUserController;
function putUserController(req, res) {
    const user = req.body;
    res.send(201).json({ message: "este es el servicio de put User", body: user });
}
exports.putUserController = putUserController;
//# sourceMappingURL=index.js.map