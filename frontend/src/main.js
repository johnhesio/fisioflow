import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // Verifique se este caminho está correto

const app = createApp(App)

app.use(router) // ESSA LINHA É OBRIGATÓRIA

app.mount('#app')