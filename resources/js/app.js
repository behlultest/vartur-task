import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/js/fontawesome.js'




import 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import { createApp } from 'vue';
import app from './src/app.vue'
import router from './src/router'
import { createPinia } from 'pinia';
const pinia = createPinia()

createApp(app).use(router).use(pinia).mount("#app")