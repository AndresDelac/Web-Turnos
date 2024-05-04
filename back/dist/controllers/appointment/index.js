"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putAppointmentController = exports.postAppointmentController = exports.getAppointmentByIdController = exports.getAllAppointments = void 0;
function getAllAppointments(req, res) {
    res.status(200).send("todas las citas");
}
exports.getAllAppointments = getAllAppointments;
function getAppointmentByIdController(req, res) {
    res.status(200).send("este es id de tus citas");
}
exports.getAppointmentByIdController = getAppointmentByIdController;
function postAppointmentController(req, res) {
    const service = req.body;
    res.send(201).json({ message: "este es servcio de post", body: service });
}
exports.postAppointmentController = postAppointmentController;
function putAppointmentController(req, res) {
    const user = req.body;
    res.send(201).json({ message: "este es el servicio de put Appointment", body: user });
}
exports.putAppointmentController = putAppointmentController;
//# sourceMappingURL=index.js.map