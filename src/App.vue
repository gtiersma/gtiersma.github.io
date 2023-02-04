<template>
  <ul class="nav flex-column nav-menu far-front">
    <li class="nav-item">
      <a class="nav-link fnt-text-light" href="#">About Me</a>
    </li>
    <li class="nav-item">
      <a class="nav-link fnt-text-light" href="#">Work I Do</a>
    </li>
    <li class="nav-item">
      <a class="nav-link fnt-text-light" href="#">What I Know</a>
    </li>
    <li class="nav-item">
      <a class="nav-link fnt-text-light" href="#">Contact</a>
    </li>
  </ul>

  <background/>
  <title-area/>

  <div class="container thm-background-dark" ref="container">
    <faq-area :page-width="widthWatcher"/>
    <project-area/>
    <skill-area :page-width="widthWatcher"/>
    <contact-area/>
  </div>
</template>

<script setup lang="ts">
import TitleArea from './components/TitleArea.vue'
import FaqArea from './components/FaqArea.vue'
import ProjectArea from './components/ProjectArea.vue'
import SkillArea from './components/SkillArea.vue'
import ContactArea from './components/ContactArea.vue'
import { type Ref, ref, onMounted } from 'vue'
import { SizeWatcher } from './SizeWatcher'

const container: Ref<HTMLElement | null> = ref(null)

const widthWatcher: SizeWatcher = new SizeWatcher(container, true, false)

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

  .container {
    padding: 0
  }
</style>
