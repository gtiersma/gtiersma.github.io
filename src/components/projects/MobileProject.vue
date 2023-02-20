<template>
  <div>

    <img :src="project?.imgPath"/>

    <!-- TEXT -->
    <div class="text-container fnt-text-dark">
      <h3>{{ project?.title }}</h3>
      <p v-for="paragraph in project?.description">{{ paragraph }}</p>
      <a
        class="btn thm-button"
        v-show="!!project?.link"
        :href="project?.link"
      >View Project</a>
    </div>

    <vue-br/>

  </div>
</template>

<script setup lang="ts">
import { Project } from './Projects';

/**
 * Swiper content of a project for low-resolutions
 * (not necessarily mobile - name is a little deceivious)
 */

const props = defineProps({
  project: Project
})
</script>

<style scoped>
img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
}

a {
  display: block;
  padding: 5px 30px;
  width: 175px;
  margin: 10px auto;
}

h3, p {
  text-align: center;
  padding: 5px 10px;
}

.text-container {
  position: static;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
</style>