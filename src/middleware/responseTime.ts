import client from 'prom-client'
export const responseTime= new client.Histogram({
    name:"response_time_of_request",
    help:"total number of response time",
    labelNames:['method','route','status'],
     buckets:[0.1,1,5,10,100,5000]
})