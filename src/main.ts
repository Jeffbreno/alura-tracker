import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './assets/sidebars/sidebars.css'
import './assets/sidebars/sidebars.js'
import roteador from './roteador'

// createApp(App).mount('#app')

createApp(App)
    .use(roteador)
    .mount('#app');
