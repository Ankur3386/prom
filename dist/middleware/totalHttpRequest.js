"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalHttpRequest = void 0;
const prom_client_1 = __importDefault(require("prom-client"));
exports.totalHttpRequest = new prom_client_1.default.Counter({
    name: "total_http_request",
    help: "total number of http request",
    labelNames: ['method', 'route', 'status']
});
