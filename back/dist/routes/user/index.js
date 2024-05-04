"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../../controllers/user");
const routeUser = (0, express_1.Router)();
routeUser.get("/", user_1.getAllUsers);
routeUser.get("/:id", user_1.getUserByIdController);
routeUser.post("/register", user_1.postUserController);
routeUser.post("/login", user_1.putUserController);
exports.default = routeUser;
//# sourceMappingURL=index.js.map