<template>
  <div id="project-area" class="fnt-text-dark">
    <h2 class="fnt-main-dark">Work that I have done</h2>

    <vue-br/>
    
    <p>A few of the more notable projects that I have worked on</p>

    <div
      id="projects"
      class="bdr-main carousel slide"
      @mouseenter="showInfo()"
      @mouseleave="hideInfo()"
    >
      <div class="carousel-indicators">
        <button
          v-for="i in projects.length"
          type="button"
          data-bs-target="#projects"
          :data-bs-slide-to="i - 1"
          :class="i == 1 ? 'active' : ''"
          :aria-current="i == 1 ? true : false"
          :aria-label="`Slide ${ i }`"
        />
      </div>
      <div v-for="(project, i) in projects" class="carousel-inner">
        <div class="carousel-item" :class="i == 0 ? 'active' : ''">
          <img id="cover-image" :src="project.coverImgPath"/>
          <img class="back" :src="project.imgPath" :alt="project.title"/>
          <div class="carousel-caption d-none d-md-block">
            <h3 class="cover-text">{{ project.title }}</h3>
            <h3 class="text">{{ project.title }}</h3>
            <div v-for="paragraph in project.description">
              <p class="cover-text">{{ paragraph }}</p>
              <p class="text">{{ paragraph }}</p>
            </div>
            <a class="btn thm-button" :href="project.imgPath">View Project</a>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#projects"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"/>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#projects"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"/>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <p>
      And that's not all. There are other projects that I have worked on that are omitted because
      they are not "professional". Contact me if you are interested in hearing about more of my
      projects.
    </p>
  </div>
</template>
  
<script setup lang="ts">
  import gsap from 'gsap';
  import { Project, Projects } from './Projects';

  const projects: Project[] = Projects

  let imgTween: GSAPTween | null = null
  let textTween: GSAPTween | null = null

  function buildTweens() {
    imgTween = gsap.to(
      "#cover-image",
      {
        duration: 0.5,
        opacity: "100%"
      }
    )
    textTween = gsap.to(
      ".cover-text", 
      {
        duration: 0.5,
        opacity: "100%",
        textShadow: "0 0 10px #000, 0 0 10px #000, 0 0 10px #000, 0 0 10px #000, 0 0 10px #000"
      }
    )
  }

  function showInfo() {
    if (!imgTween || !textTween) {
      buildTweens()
    } else {
      imgTween.play()
      textTween.play()
    }
  }

  function hideInfo() {
    imgTween?.reverse()
    textTween?.reverse()
  }
</script>
  
<style scoped>
  img {
    display: block;
    width: 100%;
    filter: "contrast(99%)"
  }

  a {
    padding: 5px 30px;
  }

  #projects {
    max-width: 70%;
    margin: 0 auto;
    padding: 20px;
    border-style: solid;
    border-width: 3px;
    border-radius: 10px;
  }

  #project-area {
    padding: 20px 0 100px 0;
  }

  #cover-image {
    position: absolute;
    opacity: 0;
  }

  h3.text {
    opacity: 50%;
  }

  p.text {
    opacity: 20%;
  }

  .text, .cover-text {
    padding: 5px 0;
  }

  .cover-text {
    position: absolute;
    width: 100%; /* needed to position title directly over other title for some reason */
    opacity: 0;
  }
</style>