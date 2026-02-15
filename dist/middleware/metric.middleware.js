"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricMiddleware = void 0;
const activeUser_1 = require("./activeUser");
const responseTime_1 = require("./responseTime");
const totalHttpRequest_1 = require("./totalHttpRequest");
const metricMiddleware = (req, res, next) => {
    const startTime = Date.now();
    activeUser_1.activeUser.inc();
    res.on('finish', () => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        totalHttpRequest_1.totalHttpRequest.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status: req.statusCode
        });
        responseTime_1.responseTime.observe({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status: req.statusCode
        }, duration);
        activeUser_1.activeUser.dec();
    });
    next();
};
exports.metricMiddleware = metricMiddleware;
