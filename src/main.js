import { createApp } from 'vue'
import i18n  from './language/'
import App from './App.vue'
import router from './router'
import './assets/styles/element/index.scss'
import './assets/main.css'

const app = createApp(App)

app.use(router).use(i18n)

app.mount('#app')
