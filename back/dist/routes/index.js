"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const user_1 = __importDefault(require("./user"));
const appointment_1 = __importDefault(require("./appointment"));
const service_1 = __importDefault(require("./service"));
router.get("/", (req, res) => {
    res.status(200).send("wenass");
});
router.use("/users", user_1.default);
router.use("/appointments", appointment_1.default);
router.use("/services", service_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map