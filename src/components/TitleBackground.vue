<template>
  <svg class="svg far-back" ref="titleBackground">
    <text
      class="font"
      v-for="(line, i) in codeLines"
      x="20"
      :y="getLineStartY(i)"
    >
      {{ line.text }}
    </text>
  </svg>

  <fa-icon class="icon back" id="chip" icon="fa-solid fa-microchip"/>
  <fa-icon class="icon back" id="wrench" icon="fa-solid fa-wrench"/>

  <svg class="svg front">
    <rect
      :id="`bar${ i }`"
      class="bar"
      ref="bars"
      v-for="i in BAR_COUNT"
      :y="barStartYs[i]"
      :height="barHeights[i]"
    />
  </svg>
</template>
  
<script setup lang="ts">
  import {
    onMounted,
    reactive,
    ref,
    watch,
    type Ref
  } from 'vue';
  import { gsap } from 'gsap'
  import { SizeWatcher } from '@/SizeWatcher';
  import { CodeLines } from './CodeLine';

  const MIN_BAR_HEIGHT: number = 10
  const MAX_BAR_HEIGHT: number = 500
  const BAR_COUNT: number = 5
  const BAR_TRAVEL_DISTANCE: number = 100

  let barStartYs: number[] = []
  let barHeights: number[] = []

  const codeLines = reactive(CodeLines)

  const titleBackground: Ref<HTMLElement | null> = ref(null)

  const heightWatcher: SizeWatcher = new SizeWatcher(titleBackground, false, true)

  const bars: Ref<HTMLElement[]> = ref([])

  function getLineStartY(lineIndex: number): number {
    return lineIndex * (heightWatcher.height.value / codeLines.length)
  }

  function getBarStartY(): number {
    return Math.random() * heightWatcher.height.value
  }
  function getBarHeight(): number {
    return Math.random() * (MAX_BAR_HEIGHT - MIN_BAR_HEIGHT) + MIN_BAR_HEIGHT
  }

  function startBackgroundAnimation() {
    codeLines.forEach(it => it.changeLine())
  }
  function startForegroundAnimation() {
    bars.value.forEach((it, i) => {
      gsap.to(
        `#${ it.id }`,
        {
          y: `-=${ BAR_TRAVEL_DISTANCE }`,
          duration: 2,
          repeat: -1,
          ease: "none",
          onRepeatParams: [it, barHeights[i]],
          onRepeat: barOnAnimationRepeat
        }
      )
    })
  }
  function barOnAnimationRepeat(bar: HTMLElement, height: number) {
    const y = Number(bar.getAttribute("y"))

    let newY: number
    if (y < -height) {
      newY = heightWatcher.height.value
    } else {
      newY = y - BAR_TRAVEL_DISTANCE
    }
    bar.setAttribute("y", String(newY))
  }

  watch(codeLines, newLines => {
    if (newLines.every(it => it.isReadyForNextLine)) {
      startBackgroundAnimation()
    }
  })

  onMounted(() => {
    barStartYs = Array(BAR_COUNT).fill(getBarStartY(), 0)
    barHeights = Array(BAR_COUNT).fill(getBarHeight(), 0)
    
    heightWatcher.start()

    startBackgroundAnimation()
    startForegroundAnimation()
  })
</script>
  
<style scoped>
#chip {
  top: 15vh;
  left: 30%;
}

#wrench {
  top: 25vh;
  left: 40%;
}

.icon {
  position: absolute;
  font-size: 256pt;
}

.font {
  font-family: "ExoMd";
}

.svg {
  width: 100vw;
  height: 80vh;
  position: absolute;
}

.bar {
  width: 100vw;
}
</style>