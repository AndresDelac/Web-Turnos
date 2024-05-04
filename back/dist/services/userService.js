"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteService = exports.createService = exports.getService = void 0;
const users = [];
const getService = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.getService = getService;
const createService = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.createService = createService;
const deleteService = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteService = deleteService;
//# sourceMappingURL=userService.js.map