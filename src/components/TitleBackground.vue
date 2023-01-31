<template>
  <svg class="svg" ref="titleBackground">
    <text
      class="font"
      v-for="(line, i) in codeLines"
      x="20"
      :y="getLineStartY(i)"
    >
      {{ line.text.value }}
    </text>
  </svg>

  <fa-icon class="icon" id="chip" icon="fa-solid fa-microchip"/>
  <fa-icon class="icon" id="wrench" icon="fa-solid fa-wrench"/>

  <svg class="svg" id="title-foreground">
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
    computed,
    onMounted,
    ref,
    watch,
    type ComputedRef,
    type Ref
  } from 'vue';
  import { gsap } from 'gsap'
  import { SizeWatcher } from '@/SizeWatcher';
  import { CodeLine, CodeLines } from './CodeLine';

  const MIN_BAR_HEIGHT: number = 10
  const MAX_BAR_HEIGHT: number = 500
  const BAR_COUNT: number = 5
  const BAR_TRAVEL_DISTANCE: number = 100

  let barStartYs: number[] = []
  let barHeights: number[] = []

  const codeLines: CodeLine[] = CodeLines

  const titleBackground: Ref<HTMLElement | null> = ref(null)

  const heightWatcher: SizeWatcher = new SizeWatcher(titleBackground, false, true)

  const bars: Ref<HTMLElement[]> = ref([])

  const readyForNextCodeAnim: ComputedRef<Boolean> = computed(() => 
    codeLines.every(it => it.isReadyForNextLine.value)
  )

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
    bars.value.forEach(it => {
      gsap.to(
        `#${ it.id }`,
        {
          y: `-=${ BAR_TRAVEL_DISTANCE }`,
          duration: 2,
          repeat: -1,
          ease: "none",
          onRepeatParams: [it],
          onRepeat: barOnAnimationRepeat
        }
      )
    })
  }
  function barOnAnimationRepeat(bar: any) {
    const y = bar.getAttribute("y")
    const height = bar.getAttribute("height")

    let startingHeight: number
    if (y < -height) {
      startingHeight = heightWatcher.height.value
    } else {
      startingHeight = y - BAR_TRAVEL_DISTANCE
    }
    bar.setAttribute("y", startingHeight)
  }

  watch(readyForNextCodeAnim, () => startBackgroundAnimation())

  onMounted(() => {
    barStartYs = Array(BAR_COUNT).fill(getBarStartY(), 0)
    barHeights = Array(BAR_COUNT).fill(getBarHeight(), 0)
    
    heightWatcher.start()

    startBackgroundAnimation()
    startForegroundAnimation()
  })
</script>
  
<style scoped>
#title-foreground {
  z-index: 15;
}

#chip {
  top: 15vh;
  left: 30%;
}

#wrench {
  top: 25vh;
  left: 40%;
}

.icon {
  position: fixed;
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