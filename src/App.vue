<template>
  <ul class="nav flex-column nav-menu">
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

  <div class="container">
    <title-area/>
    <faq-area/>
    <project-area/>
    <skill-area/>
    <contact-area/>
  </div>
</template>

<script setup lang="ts">
import TitleArea from './components/TitleArea.vue'
import FaqArea from './components/FaqArea.vue'
import ProjectArea from './components/ProjectArea.vue'
import SkillArea from './components/SkillArea.vue'
import ContactArea from './components/ContactArea.vue'
</script>

<style scoped>
  .nav-menu {
    position: fixed;
    left: 0;
    padding-top: 100px;
    height: 100%;
    background-image: linear-gradient(90deg, #fff, transparent);
    z-index: 10;
  }
</style>
