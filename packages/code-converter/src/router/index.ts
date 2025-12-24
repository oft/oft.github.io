import type { App,Plugin } from 'vue'
import { createWebHashHistory,createRouter } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export const setupRouter = (app:App)=>app.use(router)
export const setupRouterPlugin:Plugin = {install:setupRouter}