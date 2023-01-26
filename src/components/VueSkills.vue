<template>
  <h3>{{ title }}</h3>
  <br/>

  <div class="container">
    <div class="card" v-for="skill in skills">
      <img class="card-image-top" :src="getPath(skill.img)"/>
      <div class="card-body">
        <h7>{{ skill.title }}</h7>
        <p v-show="skill.isPoor">*</p>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import type { Skill } from './Skills'

  const props = defineProps({
    title: String,
    skills: Array<Skill>
  })

  function getPath(imageName: string) {
    return `public/skill_icons/${ imageName }.png`
  }
</script>
  
<style scoped>
img {
  width: 75px;
  height: 75px;
  margin: 5px auto;
  vertical-align: auto;
  object-fit: scale-down;
}

h7 {
  display: inline-block;
  text-align: center;
}

p {
  display: inline;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 100px;
}

.card {
  width: 100px;
  margin: 10px;
  background-color: #e50;
}

.card-body {
  padding: 5px;
  margin: 0 auto;
}
</style>