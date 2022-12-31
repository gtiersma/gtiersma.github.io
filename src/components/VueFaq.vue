<template>
  <div>
    <h3>{{ faq.question }}</h3>
    <h3 @click="show = !show">~</h3>
  </div>

  <div class="collapse" :class="showClass">
    <p>{{ faq.answer }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Faq } from './Faqs';

export default defineComponent({
  props: {
    faq: { type: Faq, required: true }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    showClass(): string {
      return this.show ? "show" : ""
    }
  }
})
</script>

<style scoped>

</style>