<template>
  <svg class="svg front">
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

  const props = defineProps({
    heightWatcher: SizeWatcher
  })

  const BAR_COUNT: number = 5
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
  function barOnAnimationRepeat(barEl: HTMLElement, height: number) {
    const y = Number(barEl.getAttribute("y"))

    let newY: number
    if (y < -height) {
      newY = props.heightWatcher?.height.value ?? 0
    } else {
      newY = y - BAR_TRAVEL_DISTANCE
    }
    barEl.setAttribute("y", String(newY))
  }

  onMounted(() => {
    nextTick(() => {
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