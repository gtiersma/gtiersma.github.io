<template>
  <div>

    <!-- TEXT -->
    <div class="text-container fnt-background front">
      <h3 class="project-title">{{ project?.title }}</h3>
      <p class="text front" v-for="paragraph in project?.description">{{ paragraph }}</p>
      <a
        class="btn thm-button"
        v-show="!!project?.link"
        :href="project?.link"
      >View Project</a>
    </div>

    <!-- IMAGES -->
    <img class="cover-image" :src="project?.coverImgPath"/>
    <img class="back" :src="project?.imgPath"/>
    
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { watch } from 'vue';
import { Project } from './Projects';

/**
 * Swiper content for a project for desktop resolutions
 */

// Opacities for hover effects:
const HIDDEN_OPACITY: string = "50%"
const TEXT_HIDDEN_OPACITY: string = "20%"

// Classes for easy access:
const TITLE_CLASS: string = ".project-title"
const TEXT_CLASS: string = ".text"
const IMG_CLASS: string = ".cover-image"

const props = defineProps({
  project: Project,
  showInfo: Boolean // Whether or not to show the info for the project
})

/**
 * The blurred image animation
 */
function runImgTween() {
  gsap.to(
    IMG_CLASS,
    {
      duration: 0.5,
      opacity: "100%"
    }
  )
}
  
/**
 * Text opacity/shading animation for hovering
 * 
 * @param cssClass The class to apply it to (must include period)
 */
function runShadeTween(cssClass: string) {
  gsap.to(
    cssClass,
    {
      duration: 0.5,
      opacity: "100%",
      // Multiple text shadows to make the shadows darker:
      textShadow: "0 0 10px #000, 0 0 10px #000, 0 0 10px #000, 0 0 10px #000, 0 0 10px #000"
    }
  )
}

/**
 * Tween animation reversal functions:
 */
function reverseImgTween() {
  gsap.to(
    IMG_CLASS,
    {
      duration: 0.5,
      opacity: 0
    }
  )
}
function reverseShadeTween(cssClass: string, opacity: string) {
  gsap.to(
    cssClass,
    {
      duration: 0.5,
      opacity: opacity,
      textShadow: "none"
    }
  )
}

/**
 * Making the text more/less visible for hovering
 */
function showInfo() {
  runImgTween()
  runShadeTween(TITLE_CLASS)
  runShadeTween(TEXT_CLASS)
}
function hideInfo() {
  reverseImgTween()
  reverseShadeTween(TITLE_CLASS, HIDDEN_OPACITY)
  reverseShadeTween(TEXT_CLASS, TEXT_HIDDEN_OPACITY)
}

/**
 * Show or hide the project's info as the prop changes
 */
watch(
  () => props.showInfo,
  newShow => {
    if (newShow) showInfo()
    else hideInfo()
  }
)
</script>

<style scoped>
img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
}

a {
  display: block;
  padding: 5px 30px;
  width: 175px;
  margin: 10px auto;
}

p {
  opacity: 20%;
  padding: 5px 100px;
}

h3, p {
  text-align: center;
}

.text-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}

.cover-image {
  position: absolute;
  opacity: 0;
}
</style>