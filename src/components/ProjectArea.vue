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