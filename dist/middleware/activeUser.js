"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activeUser = void 0;
const prom_client_1 = __importDefault(require("prom-client"));
exports.activeUser = new prom_client_1.default.Gauge({
    name: 'total_active_user',
    help: 'total no. of active user',
    labelNames: ['method', 'route', 'status']
});
