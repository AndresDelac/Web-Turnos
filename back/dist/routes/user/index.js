"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routeUser = (0, express_1.Router)();
routeUser.get("/", (req, res) => {
    res.status(200).send("todos los usuarios se subiran proximamente");
});
routeUser.get("/:id", () => { });
routeUser.post("/register", () => { });
routeUser.post("/login", () => { });
exports.default = routeUser;
