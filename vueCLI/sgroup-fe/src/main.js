import './assets/main.css'
import './assets/base.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './route/router'
import Notifications from '@kyvg/vue3-notification'

createApp(App)
    .use(Notifications)
    .use(router)
    .mount('#app')