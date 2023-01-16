<template>
  <div id="title-bar" class="navbar navbar-expand-sm">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">George Tiersma - Junior Fullstack Software Engineer</a>
    </div>
  </div>

  <div id="title-area">
    <title-background/>

    <h1 class="title">George Tiersma</h1>
    <h1 id="bottom-title" class="title">Junior Fullstack Software Engineer</h1>

    <button class="btn btn-primary">View Resume</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

export default defineComponent({
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

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
  }
})
</script>

<style scoped>
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
  background-color: #fff;
  justify-content: center;
  z-index: 20;
}

#title-area {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}
</style>