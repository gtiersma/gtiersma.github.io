<template>
  <h2>About Me</h2>

  <vue-faq v-for="faq in faqs" :key="faq.question" :faq="faq"/>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue'
  import VueFaq from './VueFaq.vue'
  import { Faq, Faqs } from './Faqs'
  
  export default defineComponent({
    computed: {
      faqs(): Faq[] {
        return Faqs
      }
    }
  })
</script>
  
<style scoped>
  
</style>