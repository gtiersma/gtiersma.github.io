<template>
  <div id="project-area">
    <h2>Work that I have done</h2>

    <p>A few of the more notable projects that I have worked on</p>

    <div id="projects" class="carousel slide">
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
          <img :src="project.imgPath" :alt="project.title">
          <div class="carousel-caption d-none d-md-block">
            <h3>{{ project.title }}</h3>
            <p v-for="paragraph in project.description">{{ paragraph }}</p>
            <a class="btn btn-primary" :href="project.imgPath">View Project</a>
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
  import { Project, Projects } from './Projects';

  const projects: Project[] = Projects
</script>
  
<style scoped>
  p {
    padding: 20px 10px;
  }

  img {
    display: block;
    width: 100%;
  }

  #projects {
    margin: 0 25px;
  }

  #project-area {
    padding-bottom: 100px;
  }
</style>