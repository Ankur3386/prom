import {Request,Response,NextFunction } from "express"
import client from "prom-client"
import { activeUser } from "./activeUser";
import { responseTime } from "./responseTime";
import { totalHttpRequest } from "./totalHttpRequest";
export const metricMiddleware = (req:Request,res:Response,next:NextFunction)=>{
const startTime=Date.now();
activeUser.inc()
res.on('finish',()=>{
    const endTime =Date.now();
    const duration =endTime - startTime;
    totalHttpRequest.inc({
    method:req.method,
    route:req.route ? req.route.path :req.path,
    status:res.statusCode
    })
    responseTime.observe({
        method:req.method,
        route:req.route ? req.route.path :req.path,
        status:res.statusCode
    },duration)
    activeUser.dec()
})
next()
}