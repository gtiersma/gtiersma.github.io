<template>
  <div @click="show = !show">
    <h3>{{ question }}</h3>
    <h3>~</h3>
  </div>

  <div class="collapse" :class="showClass">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    question: { type: String, required: true }
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