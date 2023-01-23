<template>
  <div class="card" @click="animate()">
    <div :id="shadingId" class="shading"/>
    <img
      :id="coverId"
      class="card-image-top cover-image"
      :src="imagePath"
    />
    <div class="card-body">
      <h3>{{ project.title }}</h3>
      <p v-for="description in project.description">{{ description }}</p>
      <button v-show="!!action" :href="action">View Project</button>
    </div>
    <img 
      :id="imageId"
      class="card-image-top"
      ref="image"
      :src="imagePath"
    />
  </div>
</template>
    
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Project } from './Projects';
  import gsap from 'gsap';
  import ScrollTrigger from "gsap/ScrollTrigger";
    
  export default defineComponent({
    props: {
      project: { type: Project, required: true }
    },
    data() {
      return {
        width: 0,
        height: 0
      }
    },
    computed: {
      action(): string {
        return this.project.action
      },
      imagePath(): string {
        return `public/${ this.project.img }`
      },
      tooltip(): string {
        if (this.timeline.progress() == 0) {
          return "Show Image"
        } else if (this.timeline.progress() == 1) {
          return "Show Info"
        }
        return "..."
      },
      imageId(): string { return `img-${ this.project.id }` },
      shadingId(): string { return `shading-${ this.project.id }` },
      coverId(): string { return `cover-image-${ this.project.id }` },
      timeline(): GSAPTimeline {
        if (this.height == 0) { return gsap.timeline() }
        return gsap.timeline({
          scrollTrigger: {
            trigger: `#${ this.imageId }`,
            start: "bottom bottom",
            end: "50% top",
            toggleActions: "play reverse play reverse"
          }
        }).to(
          `#${ this.coverId }`,
          {
            left: `${ this.width }px`,
            width: 0,
            duration: 0.5
          }
        ).to(
          `#${ this.shadingId }`,
          {
            height: `${ this.height }px`,
            duration: 0.5
          }
        )
      }
    },
    methods: {
      animate() {
        if (this.timeline.progress() < 0.5) {
          this.timeline.play()
        } else {
          this.timeline.reverse()
        }
      }
    },
    created() { gsap.registerPlugin(ScrollTrigger) },
    mounted() {
      setTimeout(() => {
        const imageEl = this.$refs.image as any
        this.width = imageEl.clientWidth
        this.height = imageEl.clientHeight
        gsap.set(
          `#${ this.coverId }`,
          { width: this.width }
        )
        this.timeline
      }, 500)
    }
  })
</script>
    
<style scoped>
img {
  width: 100%;
}

button {
  display: block;
  margin: 0 auto;
}

.card {
  cursor:pointer;
}

.cover-image {
  position: absolute;
  min-height: 100%;
  object-fit: cover;
  object-position: right;
  z-index: 5;
}

.shading {
  background-image: linear-gradient(#0000, #000f, #000f);
  position: absolute;
  width: 100%;
  height: 0;
  z-index: 1;
}

.card {
  background-color: blue;
  justify-content: end;
}

.card-body {
  position: absolute;
  margin: 20px;
  display: inline-block;
  z-index: 3;
}
</style>