<template>
  <div id="title-bar" class="navbar navbar-expand-sm thm-main far-far-front">
    <div class="navbar-header">
      <a class="navbar-brand fnt-text-dark" @click="toPageTop()">George Tiersma - Fullstack Software Engineer</a>
    </div>
  </div>

  <div id="title-area" ref="titleArea">
    <div class="back-background thm-background far-far-back"/>
    <title-background :height-watcher="heightWatcher"/>

    <h1 class="title fnt-text-dark">George Tiersma</h1>
    <h1 id="bottom-title" class="title fnt-text-dark">Fullstack Software Engineer</h1>

    <a class="btn thm-button far-front" href="portfolio/resume.pdf">View Resume</a>

    <!--<title-foreground :height-watcher="heightWatcher"/>-->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { SizeWatcher } from '@/common/SizeWatcher';

gsap.registerPlugin(ScrollTrigger)

const titleArea: Ref<HTMLElement | null> = ref(null)

const heightWatcher: SizeWatcher = new SizeWatcher(titleArea, false, true)

function toPageTop() { window.scrollTo(0, 0) }

onMounted(() => {
  heightWatcher.start()

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
  ),

  gsap.to(
    ".title",
    {
      textShadow: "0 0 30px #d5792c, 0 0 30px #d5792c, 0 0 30px #d5792c",
      duration: 3,
      repeat: -1,
      yoyo: true
    }
  )
})
</script>

<style scoped>
h1 {
  font-size: 54pt;
  font-weight: bolder;
}

a {
  cursor: pointer;
}

.btn {
  width: 200px;
  margin: 0 auto;
}

.back-background {
  position: absolute;
  width: 100%;
  height: 90vh;
}

.title {
  font-family: "ExoBd";
  text-shadow: 0 0 3px #cb6709, 0 0 3px #cb6709, 0 0 3px #cb6709;
}

#title-bar {
  position: fixed;
  left: 0;
  top: -100px;
  width: 100%;
  justify-content: center;
}

#title-area {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}

@media (max-width: 992px) {
  h1 {
    font-size: 26pt;
  }
}
</style>