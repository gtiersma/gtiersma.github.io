<template>
  <div class="card">
    <img class="card-image-top" :src="imagePath"/>
    <div class="card-body">
      <h5>{{ project.title }}</h5>
      <p>{{ project.description }}</p>
      <a v-show="!!action">{{ action }}</a>
    </div>
  </div>
</template>
    
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Project } from './Projects';
    
  export default defineComponent({
    props: {
      project: { type: Project, required: true }
    },
    computed: {
      action(): string {
        return this.project.action
      },
      imagePath(): string {
        return `public/${ this.project.img }.jpg`
      }
    }
  })
</script>
    
<style scoped>
    
</style>