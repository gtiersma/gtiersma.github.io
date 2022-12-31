<template>
  <h2>Work that I have done</h2>

  <p>A few of the more notable projects I have worked on.</p>

  <div class="container">
    <div class="row" v-for="projectRow in projectRows" :key="projectRow[0].title">
      <div class="column" v-for="project in projectRow" :key="project.title">
        <vue-project :project="project"/>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Project, Projects } from './Projects';
  
  export default defineComponent({
    computed: {
      projects(): Project[] {
        return Projects
      },
      projectRows(): Array<Project[]> {
        let projectRows: Array<Project[]> = [[]]
        this.projects.forEach(it => {
          if (projectRows[projectRows.length - 1].length == 3) {
            projectRows.push([])
          }
          projectRows[projectRows.length - 1].push(it)
        })
        return projectRows
      }
    }
  })
</script>
  
<style scoped>
  
</style>