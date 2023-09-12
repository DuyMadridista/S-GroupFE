import './assets/main.css'
//import './assets/base.css'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './route/router'
import Notifications from '@kyvg/vue3-notification'
import { createPinia } from 'pinia'
const pinia = createPinia();
console.log(import.meta.env.VITE_VUE_APP_BASE_URL);
createApp(App)
    .use(Notifications)
    .use(pinia)
    .use(ElementPlus)
    .use(router)
    .mount('#app')