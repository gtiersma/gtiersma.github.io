// VUE
import { createApp } from 'vue'
import App from './App.vue'

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// GLOBAL STYLES
import './styles/main.css'

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// INDIVIDUAL FA ICONS
import { faPhone, faEnvelope, faMicrochip, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
library.add(faPhone, faEnvelope, faMicrochip, faWrench, faGithub, faLinkedinIn)

// SWIPER
import { register } from 'swiper/element/bundle'
register();

// CUSTOM GLOBAL COMPONENTS
import VueFaq from './components/faqs/VueFaq.vue'
import VueProject from './components/projects/VueProject.vue'
import MobileProject from './components/projects/MobileProject.vue'
import VueSkills from './components/skills/VueSkills.vue'

import VueBr from './components/graphics/VueBr.vue'
import Background from './components/graphics/Background.vue'
import DividedSection from './components/graphics/divider/DividedSection.vue'
import TitleBackground from './components/graphics/title/TitleBackground.vue'
import TitleForeground from './components/graphics/title/TitleForeground.vue'

// CONSTRUCTION
createApp(App)
  .component("FaIcon", FontAwesomeIcon)
  .component("VueFaq", VueFaq)
  .component("VueProject", VueProject)
  .component("MobileProject", MobileProject)
  .component("VueSkills", VueSkills)
  .component("VueBr", VueBr)
  .component("Background", Background)
  .component("DividedSection", DividedSection)
  .component("TitleBackground", TitleBackground)
  .component("TitleForeground", TitleForeground)
  .mount('#app')
