import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './styles/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPhone, faEnvelope, faMicrochip, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(faPhone, faEnvelope, faMicrochip, faWrench, faGithub, faLinkedinIn)

import VueFaq from './components/faqs/VueFaq.vue'
import VueSkills from './components/skills/VueSkills.vue'

import VueBr from './components/graphics/VueBr.vue'
import Background from './components/graphics/Background.vue'
import DividedSection from './components/graphics/divider/DividedSection.vue'
import TitleBackground from './components/graphics/title/TitleBackground.vue'
import TitleForeground from './components/graphics/title/TitleForeground.vue'

createApp(App)
  .component("FaIcon", FontAwesomeIcon)
  .component("VueFaq", VueFaq)
  .component("VueSkills", VueSkills)
  .component("VueBr", VueBr)
  .component("Background", Background)
  .component("DividedSection", DividedSection)
  .component("TitleBackground", TitleBackground)
  .component("TitleForeground", TitleForeground)
  .mount('#app')
