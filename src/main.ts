import './assets/main.css'
import { VueScreenSizeMixin } from 'vue-screen-size';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
const app = createApp(App)
app.use(createPinia())
app.use(VueScreenSizeMixin)
app.mount('#app')

