import express from "express";
const app =express();
import client from "prom-client"
import { metricMiddleware } from "./middleware/metric.middleware";
app.use(metricMiddleware)
app.get('/user',(req,res)=>{
  setTimeout(()=>{
    res.send("hi");
  },Math.random()*2500)
})

app.listen(3000)