<template>
  <divided-section :page-width="props.pageWidth">
    <h2 class="fnt-main">Technical Experience</h2>

    <vue-br/>
    
    <p class="fnt-text">
      The ability to learn new tools and adapt to using them is much more important than
      what someone may already know. But for those interested in what technologies I am already
      familiar with, I provide a fairly extensive list here:
    </p>

    <p class="fine-print fnt-main-dark">
      (*) - Indicates only begginer-lever experience. Further guidance or education would be necessary.
    </p>

    <vue-skills title="Programming Languages" :skills="languages"/>
    <vue-skills title="Libraries & Frameworks" :skills="libraries"/>
    <vue-skills title="Database" :skills="databases"/>
    <vue-skills title="IDEs" :skills="ides"/>
    <vue-skills title="Version Control" :skills="versions"/>
    <vue-skills title="Graphics" :skills="graphics"/>
    <vue-skills title="Other Software" :skills="others"/>
  </divided-section>
</template>

<script setup lang="ts">
import { SizeWatcher } from '@/common/SizeWatcher';
import {
  Skill,
  Languages,
  Libraries,
  Ides,
  Graphics,
  Versions,
  Databases,
  Others
} from './Skills';

const props = defineProps({
  pageWidth: SizeWatcher
})

const languages: Skill[] = Languages
const libraries: Skill[] = Libraries
const ides: Skill[] = Ides
const graphics: Skill[] = Graphics
const versions: Skill[] = Versions
const databases: Skill[] = Databases
const others: Skill[] = Others
</script>

<style scoped>
  .fine-print {
    font-size: 8pt;
  }
</style>