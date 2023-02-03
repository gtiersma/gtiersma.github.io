<template>
  <ul class="nav flex-column nav-menu far-front">
    <li class="nav-item">
      <a class="nav-link" href="#">About Me</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Work I Do</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">What I Know</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contact</a>
    </li>
  </ul>

  <background :page-width="widthWatcher"/>
  <title-area/>

  <div class="container" ref="container">
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
    background-image: linear-gradient(90deg, #000, transparent);
  }
</style>
