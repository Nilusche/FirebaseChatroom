import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { projectAuth } from './firebase/config.js'

projectAuth.onAuthStateChanged(()=>{
    createApp(App).use(router).mount('#app')
})
