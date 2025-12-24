import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouterPlugin } from './router'

createApp(App)
.use(setupRouterPlugin)
.mount('#app')
