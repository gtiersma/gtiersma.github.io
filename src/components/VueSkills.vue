<template>
  <h3>{{ title }}</h3>

  <div class="container">
    <div class="row" v-for="row in rows" :key="row[0].title">
      <div class="column" v-for="skill in row" :key="skill.title">
        <div class="card">
          <img class="card-image-top" :src="getPath(skill.img)"/>
          <div class="card-body">
            <h5>{{ skill.title }}</h5>
            <p v-show="skill.isPoor">*</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  import type { Skill } from './Skills'
  
  export default defineComponent({
    props: {
      title: { type: String, required: true },
      skills: { type: Array<Skill>, required: true }
    },
    data() {
      return {
        COLUMN_COUNT: 5
      }
    },
    methods: {
      getPath(imageName: string) {
        return `public/${ imageName }.jpg`
      }
    },
    computed: {
      rows(): Array<Skill[]> {
        let rows: Array<Skill[]> = [[]]
        this.skills.forEach(it => {
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