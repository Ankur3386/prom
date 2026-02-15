"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseTime = void 0;
const prom_client_1 = __importDefault(require("prom-client"));
exports.responseTime = new prom_client_1.default.Histogram({
    name: "response_time_of_request",
    help: "total number of response time",
    labelNames: ['method', 'route', 'status'],
    buckets: [0.1, 1, 5, 10, 100, 5000]
});
