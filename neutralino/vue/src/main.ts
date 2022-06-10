import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

window.Neutralino?.init()

const app = createApp(App)

app.use(router)

app.mount('#app')
