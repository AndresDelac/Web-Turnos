"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putServiceController = exports.postServiceController = exports.getServicesByIdController = exports.getAllServices = void 0;
function getAllServices(req, res) {
    res.status(200).send("todas los serrvicios");
}
exports.getAllServices = getAllServices;
function getServicesByIdController(req, res) {
    res.status(200).send("este es id del servicio");
}
exports.getServicesByIdController = getServicesByIdController;
function postServiceController(req, res) {
    const service = req.body;
    res.send(201).json({ message: "este es servcio de post", body: service });
}
exports.postServiceController = postServiceController;
function putServiceController(req, res) {
    const user = req.body;
    res.send(201).json({ message: "este es el servicio de put ", body: user });
}
exports.putServiceController = putServiceController;
//# sourceMappingURL=index.js.map