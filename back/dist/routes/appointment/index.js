"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointment_1 = require("../../controllers/appointment");
const appointments = (0, express_1.Router)();
appointments.get("/", appointment_1.getAllAppointments);
appointments.get("/:id", appointment_1.getAppointmentByIdController);
appointments.post("/register", appointment_1.postAppointmentController);
appointments.post("/login", appointment_1.putAppointmentController);
exports.default = appointments;
//# sourceMappingURL=index.js.map