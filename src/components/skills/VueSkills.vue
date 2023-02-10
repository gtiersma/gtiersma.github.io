<template>
  <div class="container">
    <h3 class="fnt-text-dark">{{ title }}</h3>

    <div class="body">
      <div class="card thm-background-dark far-front" v-for="skill in skills">
        <img class="card-image-top" :src="getPath(skill.img)"/>
        <div class="card-body">
          <h6 class="fnt-text-dark">{{ skill.title }}</h6>
          <p v-show="skill.isPoor" class="fnt-main-dark">*</p>
        </div>
      </div>
    </div>

    <vue-br/>
  </div>
</template>
  
<script setup lang="ts">
  import type { Skill } from './Skills'

  const props = defineProps({
    title: String,
    skills: Array<Skill>
  })

  function getPath(imageName: string) {
    return `skills/${ imageName }.png`
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

h6 {
  display: inline-block;
  text-align: center;
}

p {
  display: inline;
  padding: 0;
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
  border: none;
}

.card-body {
  padding: 5px;
  margin: 0 auto;
}

@media (max-width: 992px) {
  .body {
    padding: 0 50px 100px;
  }
}
</style>