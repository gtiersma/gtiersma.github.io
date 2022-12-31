<template>
  <h2>Work that I have done</h2>

  <p>A few of the more notable projects I have worked on.</p>

  <div class="container">
    <div class="row" v-for="row in rows" :key="row[0].title">
      <div class="column" v-for="project in row" :key="project.title">
        <vue-project :project="project"/>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Project, Projects } from './Projects';
  
  export default defineComponent({
    data() {
      return {
        COLUMN_COUNT: 3
      }
    },
    computed: {
      projects(): Project[] {
        return Projects
      },
      rows(): Array<Project[]> {
        let rows: Array<Project[]> = [[]]
        this.projects.forEach(it => {
          if (rows[rows.length - 1].length == this.COLUMN_COUNT) {
            rows.push([])
          }
          rows[rows.length - 1].push(it)
        })
        return rows
      }
    }
  })
</script>
  
<style scoped>
  
</style>