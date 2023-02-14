<template>
  <svg class="svg front">

    <!-- GRADIENT EFFECTS -->
    <defs>
      <linearGradient
        v-for="(gradient, i) in barGradients"
        :id="`gradient-${ i }`"
        :x1="gradient.startX"
        :y1="gradient.startY"
        :x2="gradient.endX"
        :y2="gradient.endY"
      >
        <stop
          v-for="point in gradient.points"
          :offset="point.pointPercentage"
          stop-color="#fff"
          :stop-opacity="point.opacity"
        />
      </linearGradient>
    </defs>

    <!-- BARS -->
    <rect
      :id="`bar${ i }`"
      class="bar thm-background"
      ref="barEls"
      v-for="(bar, i) in bars"
      :y="bar.startY"
      :height="bar.height"
      :fill="`url(#gradient-${ i })`"
    />

  </svg>
</template>

<script setup lang="ts">
  import {
    computed,
    nextTick,
    onMounted,
    ref,
    type ComputedRef,
    type Ref
  } from 'vue';
  import { gsap } from 'gsap'
  import { BarGradient, TitleBar } from './TitleBar';
  import { SizeWatcher } from '@/common/SizeWatcher';

  /**
   * BROKEN - NOT USED - See "TitleBar.ts" for more info
   * 
   * Takes a SizeWatcher that is watching its parent container's height as a prop
   */
  const props = defineProps({
    heightWatcher: SizeWatcher
  })

  // The number of bars that should be moving over the title area
  const BAR_COUNT: number = 5

  // How far each bar should travel in a single animation cycle
  const BAR_TRAVEL_DISTANCE: number = 100

  const bars: Ref<TitleBar[]> = ref([])

  const barEls: Ref<HTMLElement[]> = ref([])

  const barGradients: ComputedRef<BarGradient[]> = computed(() =>
    bars.value.map(it => it.gradient)
  )

  function startAnimation() {
    barEls.value.forEach((it, i) => {
      gsap.to(
        `#${ it.id }`,
        {
          y: `-=${ BAR_TRAVEL_DISTANCE }`,
          duration: 2,
          repeat: -1,
          ease: "none",
          onRepeatParams: [it, bars.value[i].height],
          onRepeat: barOnAnimationRepeat
        }
      )
    })
  }

  /**
   * Keeps the bar smoothly moving forward after each animation cycle
   * 
   * @param barEl The element of the bar that just finished a move animation
   * @param height The height of the svg container
   */
  function barOnAnimationRepeat(barEl: HTMLElement, height: number) {

    // Get the bar's Y position (technically the point where the animation started - the animation doesn't count)
    const y = Number(barEl.getAttribute("y"))

    // The Y position the bar should be moved to
    // (technically the Y position the bar appears to currently have now - counting the animation)
    let newY: number

    // Ensure that if the bar is high enough beyond the top of the page that it cannot be seen
    // that it loops to under the svg:
    if (y < -height) {
      newY = props.heightWatcher?.height.value ?? 0
    } else {
      newY = y - BAR_TRAVEL_DISTANCE
    }

    // Set that as the Y position:
    barEl.setAttribute("y", String(newY))
  }

  onMounted(() => {
    // nextTick needed to ensure that the element in the SizeWatcher has had its height loaded:
    nextTick(() => {

      // Builds the bars:
      for (let i = 0; i < BAR_COUNT; i++) {
        bars.value.push(
          new TitleBar(
            props.heightWatcher?.height.value ?? 0
          )
        )
      }

      startAnimation()
    })
  })
</script>
  
<style scoped>
.svg {
  width: 100vw;
  height: 80vh;
  position: absolute;
}

.bar {
  width: 100vw;
}
</style>