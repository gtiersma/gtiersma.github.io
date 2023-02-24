<template>

  <!-- SIDE BAR NAV -->
  <ul
    class="nav flex-column nav-menu far-front"
    @mouseenter="navIn()"
    @mouseleave="navOut()"
  >
    <li class="nav-item">
      <a class="nav-link fnt-text-light" @click="faqArea?.scrollIntoView()">About Me</a>
    </li>
    <li class="nav-item">
      <a class="nav-link fnt-text-light" @click="projectArea?.scrollIntoView()">My Work</a>
    </li>
    <li class="nav-item">
      <a class="nav-link fnt-text-light" @click="skillArea?.scrollIntoView()">Tech I Use</a>
    </li>
    <li class="nav-item">
      <a class="nav-link fnt-text-light" @click="contactArea?.scrollIntoView()">Contact</a>
    </li>
  </ul>

  <background/>

  <title-area/>

  <!-- WEBSITE BODY -->
  <div class="container thm-background-dark" ref="container">
    <div ref="faqArea">
      <faq-area :page-width="widthWatcher"/>
    </div>
    <div ref="projectArea">
      <project-area/>
    </div>
    <div ref="skillArea">
      <skill-area :page-width="widthWatcher"/>
    </div>
    <div ref="contactArea">
      <contact-area/>
    </div>
  </div>

</template>

<script setup lang="ts">
import TitleArea from './components/TitleArea.vue'
import FaqArea from './components/faqs/FaqArea.vue'
import ProjectArea from './components/projects/ProjectArea.vue'
import SkillArea from './components/skills/SkillArea.vue'
import ContactArea from './components/ContactArea.vue'
import { type Ref, ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { SizeWatcher } from './common/SizeWatcher'

/**
 * The top parent component
 */

const container: Ref<HTMLElement | null> = ref(null)

const faqArea: Ref<HTMLElement | null> = ref(null)
const projectArea: Ref<HTMLElement | null> = ref(null)
const skillArea: Ref<HTMLElement | null> = ref(null)
const contactArea: Ref<HTMLElement | null> = ref(null)

// Watches the width of the container of all the "areas"
const widthWatcher: SizeWatcher = new SizeWatcher(container, true, false)

// Optimization to majorly increase animation performance (30fps instead of 60fps)
//
// Performance was fine at 60fps,
// but it used more resources on somewhat-old hardware than it should need to.
gsap.ticker.fps(30)

/**
 * Side bar nav cursor animations
 */
function navIn() {
  gsap.to(
    ".nav",
    {
      backgroundColor: "#f1f1f1",
      duration: 0.5
    }
  )
  gsap.to(
    ".nav-link",
    {
      fontSize: "14pt",
      duration: 0.5
    }
  )
}
function navOut() {
  gsap.to(
    ".nav",
    {
      backgroundColor: "transparent",
      duration: 0.5
    }
  )
  gsap.to(
    ".nav-link",
    {
      fontSize: "12pt",
      duration: 0.5
    }
  )
}

onMounted(() => widthWatcher.start())
</script>

<style scoped>
  a {
    cursor: pointer;
  }

  .nav-menu {
    position: fixed;
    left: 0;
    padding-top: 100px;
    height: 100%;
    background-image: linear-gradient(90deg, #f1f1f1, transparent, transparent);
  }

  .nav-link:hover {
    color: #a73b0c;
  }

  .container {
    padding: 0
  }

  @media (max-width: 992px) {
    .nav {
      /* Website is small enough that nav shouldn't be needed on mobile */
      display: none;
    }
  }
</style>
