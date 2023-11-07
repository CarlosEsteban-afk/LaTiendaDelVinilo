
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { registerPlugins } from '@/plugins'

const pinia = createPinia()
const app = createApp(App)

registerPlugins(app)

app.use(pinia)
app.mount('#app')