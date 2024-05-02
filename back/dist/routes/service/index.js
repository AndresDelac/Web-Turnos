"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const serviceRoute = (0, express_1.Router)();
serviceRoute.get("/", (req, res) => {
    res.status(200).send("los servicios se subiran proximamente");
});
serviceRoute.get("/:id", () => { });
serviceRoute.post("/register", () => { });
serviceRoute.post("/login", () => { });
exports.default = serviceRoute;
