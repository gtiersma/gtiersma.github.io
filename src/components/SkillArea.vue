<template>
  <divided-section>
    <h2>Technical Experience</h2>

    <p>As a fast-learner, I believe that the ability to learn new tools
    and adapt to them is much more important than what one may already know.
    However, for those interested in what technologies I have already used,
    I provide that information here.</p>

    <p class="fine-print">(*) - Indicates only begginer-lever experience. Further guidance or education would be necessary.</p>

    <vue-skills title="Programming Languages" :skills="languages"/>
    <vue-skills title="Libraries & Frameworks" :skills="libraries"/>
    <vue-skills title="Database" :skills="databases"/>
    <vue-skills title="IDEs" :skills="ides"/>
    <vue-skills title="Version Control" :skills="versions"/>
    <vue-skills title="Graphics" :skills="graphics"/>
    <vue-skills title="Operation Systems" :skills="oses"/>
    <vue-skills title="Other Software" :skills="others"/>
  </divided-section>
</template>

<script setup lang="ts">
import {
  Skill,
  Languages,
  Libraries,
  Ides,
  Graphics,
  Versions,
  Databases,
  Oses,
  Others
} from './Skills';

const languages: Skill[] = Languages
const libraries: Skill[] = Libraries
const ides: Skill[] = Ides
const graphics: Skill[] = Graphics
const versions: Skill[] = Versions
const databases: Skill[] = Databases
const oses: Skill[] = Oses
const others: Skill[] = Others
</script>

<style scoped>
  .fine-print {
    font-size: 8pt;
  }
</style>