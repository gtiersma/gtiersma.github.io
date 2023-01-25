<template>
  <h2>Work that I have done</h2>

  <p>A few of the more notable projects that I have worked on</p>

  <vue-project v-for="project in projects" :project="project"/>

  <p>
    And that's not all. There are other projects that I have worked on that are omitted because
    they are not "professional". Contact me if you are interested in hearing about more of my
    projects.
  </p>

</template>
  
<script setup lang="ts">
  import { Project, Projects } from './Projects';

  const projects: Project[] = Projects
</script>
  
<style scoped>
</style>