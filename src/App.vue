<template>
  <ul
    class="nav flex-column nav-menu far-front"
    @mouseenter="navIn()"
    @mouseleave="navOut()"
  >
    <li class="nav-item">
      <a class="nav-link fnt-text-light" @click="faqArea?.scrollIntoView()">About Me</a>
    </li>
    <li class="nav-item">
      <a class="nav-link fnt-text-light" @click="projectArea?.scrollIntoView()">Work I Do</a>
    </li>
    <li class="nav-item">
      <a class="nav-link fnt-text-light" @click="skillArea?.scrollIntoView()">Tech I Know</a>
    </li>
    <li class="nav-item">
      <a class="nav-link fnt-text-light" @click="contactArea?.scrollIntoView()">Contact</a>
    </li>
  </ul>

  <background/>
  <title-area/>

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
import FaqArea from './components/FaqArea.vue'
import ProjectArea from './components/ProjectArea.vue'
import SkillArea from './components/SkillArea.vue'
import ContactArea from './components/ContactArea.vue'
import { type Ref, ref, onMounted, defineExpose } from 'vue'
import { SizeWatcher } from './SizeWatcher'
import { gsap } from 'gsap'

const container: Ref<HTMLElement | null> = ref(null)

const faqArea: Ref<HTMLElement | null> = ref(null)
const projectArea: Ref<HTMLElement | null> = ref(null)
const skillArea: Ref<HTMLElement | null> = ref(null)
const contactArea: Ref<HTMLElement | null> = ref(null)

const widthWatcher: SizeWatcher = new SizeWatcher(container, true, false)

gsap.ticker.fps(30)

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
      display: none;
    }
  }
</style>
