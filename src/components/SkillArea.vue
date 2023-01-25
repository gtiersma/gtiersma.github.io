<template>
  <h2>Technical Experience</h2>

  <p>As a fast-learner, I believe that the ability to learn new tools
  and adapt to them is much more important than what one may already know.
  However, for those interested in what technologies I have already used,
  I provide that information here.</p>

  <p>(*) - Indicates only begginer-lever experience. Further guidance or education would be necessary.</p>

  <vue-skills title="title" :skills="skills"/>
</template>

<script setup lang="ts">
import { Skill, Skills } from './Skills';

const skills: Skill[] = Skills
</script>

<style scoped>

</style>