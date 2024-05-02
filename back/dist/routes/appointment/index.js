"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointments = (0, express_1.Router)();
appointments.get("/", (req, res) => {
    res.status(200).send("todas las citas se subiran proximamente");
});
appointments.get("/:id", () => { });
appointments.post("/register", () => { });
appointments.post("/login", () => { });
exports.default = appointments;
