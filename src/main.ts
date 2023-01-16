import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPhone, faEnvelope, faMicrochip, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(faPhone, faEnvelope, faMicrochip, faWrench, faGithub, faLinkedinIn)

import VueFaq from './components/VueFaq.vue'
import VueProject from './components/VueProject.vue'
import VueSkills from './components/VueSkills.vue'

import TitleBackground from './components/TitleBackground.vue'

createApp(App)
  .component("FaIcon", FontAwesomeIcon)
  .component("VueFaq", VueFaq)
  .component("VueProject", VueProject)
  .component("VueSkills", VueSkills)
  .component("TitleBackground", TitleBackground)
  .mount('#app')
