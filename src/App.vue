<template>
  <ul class="nav flex-column">
    <li class="nav-item">
      <a class="nav-link" href="#">About Me</a>
    </li>
  </ul>

  <div class="navbar navbar-expand-sm">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">George Tiersma - Junior Fullstack Software Engineer</a>
    </div>
  </div>

  <title-area/>
  <faq-area/>
</template>

<script setup lang="ts">
import TitleArea from './components/TitleArea.vue'
import FaqArea from './components/FaqArea.vue'
</script>

<style scoped>
</style>
