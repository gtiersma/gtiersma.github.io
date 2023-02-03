import { createApp } from 'vue'
import App from './App.vue'

import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPhone, faEnvelope, faMicrochip, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(faPhone, faEnvelope, faMicrochip, faWrench, faGithub, faLinkedinIn)

import VueFaq from './components/VueFaq.vue'
import VueSkills from './components/VueSkills.vue'

import VueBr from './components/VueBr.vue'
import Background from './components/Background.vue'
import DividedSection from './components/DividedSection.vue'
import TitleBackground from './components/TitleBackground.vue'
import { DEFAULT_TIPPY_PROPS } from './Constants'

createApp(App)
  .component("FaIcon", FontAwesomeIcon)
  .component("VueFaq", VueFaq)
  .component("VueSkills", VueSkills)
  .component("VueBr", VueBr)
  .component("Background", Background)
  .component("DividedSection", DividedSection)
  .component("TitleBackground", TitleBackground)
  .use(VueTippy, { defaultProps: DEFAULT_TIPPY_PROPS })
  .mount('#app')
