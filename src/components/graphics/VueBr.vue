<template>
  <svg>
    <rect class="thm-main-dark" width="100%" height="3px"/>
  </svg>
</template>

<script setup lang="ts">
/**
 * A custom <br/> element
 * 
 * A regular <br/> element was not displaying how I would like. This gives me more control over it.
 * I was also originally considering a light, animated gradient for the br (this component would allow it),
 * but that never ended up happening.
 */
</script>

<style scoped>
svg {
  display: block;
  width: 90%;
  height: 2px;
  margin: 10px auto 50px auto;
}

rect {
  display: block;
}
</style>