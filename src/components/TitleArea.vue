<template>
  <div id="title-bar" class="navbar navbar-expand-sm thm-main far-far-front">
    <div class="navbar-header">
      <a class="navbar-brand fnt-text-dark" href="#">George Tiersma - Junior Fullstack Software Engineer</a>
    </div>
  </div>

  <div id="title-area">
    <title-background/>

    <h1 class="title fnt-background-dark">George Tiersma</h1>
    <h1 id="bottom-title" class="title fnt-background-dark">Junior Fullstack Software Engineer</h1>

    <button class="btn btn-primary far-front">View Resume</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to(
    "#title-bar",
    {
      scrollTrigger: {
        trigger: "#bottom-title",
        start: "bottom top",
        toggleActions: "play none none reverse"
      },
      y: 100
    }
  )
})
</script>

<style scoped>
h1 {
  font-size: 54pt;
  font-weight: bolder;
}

button {
  width: 200px;
  margin: 0 auto;
}

.title {
  font-family: "ExoBd";
}

#title-bar {
  position: fixed;
  left: 0;
  top: -100px;
  width: 100%;
  justify-content: center;
}

#title-area {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}
</style>