<template>
  <div class="container">
    <vue-br/>
    
    <h3>{{ title }}</h3>

    <div class="body">
      <div class="card far-front" v-for="skill in skills">
        <img class="card-image-top" :src="getPath(skill.img)"/>
        <div class="card-body">
          <h6>{{ skill.title }}</h6>
          <p v-show="skill.isPoor">*</p>
        </div>
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

h3 {
  display: inline-block;
  text-align: center;
}

p {
  display: inline;
}

.body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 100px 100px;
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