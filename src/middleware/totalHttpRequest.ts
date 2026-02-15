import client from 'prom-client'
export const totalHttpRequest = new client.Counter({
    name:"total_http_request",
    help:"total number of http request",
    labelNames:['method','route','status']
})