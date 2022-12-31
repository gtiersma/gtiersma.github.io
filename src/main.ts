import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './assets/main.css'

import VueFaq from './components/VueFaq.vue'

createApp(App)
  .component("VueFaq", VueFaq)
  .mount('#app')
