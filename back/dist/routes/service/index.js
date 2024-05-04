"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const serviceRoute = (0, express_1.Router)();
serviceRoute.get("/");
serviceRoute.get("/:id", () => { });
serviceRoute.post("/register", () => { });
serviceRoute.post("/login", () => { });
exports.default = serviceRoute;
//# sourceMappingURL=index.js.map