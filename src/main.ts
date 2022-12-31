import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './assets/main.css'

import VueFaq from './components/VueFaq.vue'
import VueProject from './components/VueProject.vue'
import VueSkills from './components/VueSkills.vue'

createApp(App)
  .component("VueFaq", VueFaq)
  .component("VueProject", VueProject)
  .component("VueSkills", VueSkills)
  .mount('#app')
