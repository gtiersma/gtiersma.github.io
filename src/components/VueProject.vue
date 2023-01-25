<template>
  <div class="card" @click="animate()" v-tippy="tooltip">
    <div :id="shadingId" class="shading"/>
    <img
      :id="coverId"
      class="card-image-top cover-image"
      :src="imagePath"
    />
    <div class="card-body">
      <h3>{{ project?.title }}</h3>
      <p v-for="description in project?.description">{{ description }}</p>
      <button v-show="!!props.project?.action" :href="imagePath">View Project</button>
    </div>
    <img 
      :id="imageId"
      class="card-image-top"
      ref="imageEl"
      :src="imagePath"
    />
  </div>
</template>
    
<script setup lang="ts">
  import { Project } from './Projects';
  import gsap from 'gsap';
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { type Ref, ref, computed, type ComputedRef, onMounted } from 'vue';

  gsap.registerPlugin(ScrollTrigger)

  const props = defineProps({ project: Project })

  const width: Ref<number> = ref(0)
  const height: Ref<number> = ref(0)

  const tooltip: Ref<string> = ref("Show Info")

  const imageEl: Ref<HTMLElement | null> = ref(null)

  const imagePath: ComputedRef<string> = computed(() => `public/${ props.project?.img }`)
    
  const imageId: ComputedRef<string> = computed(() => `img-${ props.project?.id }`)
  const shadingId: ComputedRef<string> = computed(() => `shading-${ props.project?.id }`)
  const coverId: ComputedRef<string> = computed(() => `cover-image-${ props.project?.id }`)

  const timeline: ComputedRef<GSAPTimeline> = computed(() => {
    if (height.value == 0) return gsap.timeline()
    return gsap.timeline({
      scrollTrigger: {
        trigger: `#${ imageId.value }`,
        start: "bottom bottom",
        end: "50% top",
        toggleActions: "play reverse play reverse"
      }
    }).to(
      `#${ coverId.value }`,
      {
        left: `${ width.value }px`,
        width: 0,
        duration: 0.5,
        onReverseComplete: () => { tooltip.value = "Show Info" }
      }
    ).to(
      `#${ shadingId.value }`,
      {
        height: `${ height.value }px`,
        duration: 0.5,
        onComplete: () => { tooltip.value = "Show Image" }
      }
    )
  })

  function animate() {
    if (timeline.value.progress() < 0.5) {
      timeline.value.play()
    } else {
      timeline.value.reverse()
    }
  }

  onMounted(() => {
    setTimeout(() => {
      width.value = imageEl.value?.clientWidth ?? 0
      height.value = imageEl.value?.clientHeight ?? 0
      gsap.set(
        `#${ coverId.value }`,
        { width: width.value }
      )
      timeline.value
    }, 500)
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