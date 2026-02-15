import client from 'prom-client'
export const activeUser = new client.Gauge({
    name:'total_active_user',
    help:'total no. of active user',
    labelNames:['method','route','status']
})