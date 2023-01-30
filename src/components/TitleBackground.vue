<template>
  <svg class="svg" ref="titleBackground">
    <g
      class="line-group"
      v-for="i in LINE_GROUP_COUNT"
      x="-20"
      :y="getLineGroupStartY(i)"
    >
      <text
        class="font"
        v-for="j in LINES_PER_GROUP"
        x="-20"
        :y="getLineStartY(i, j)"
      >
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </text>
    </g>
  </svg>

  <fa-icon class="icon" id="chip" icon="fa-solid fa-microchip"/>
  <fa-icon class="icon" id="wrench" icon="fa-solid fa-wrench"/>

  <svg class="svg" id="title-foreground">
    <rect
      :id="`bar${ i }`"
      class="bar"
      ref="bars"
      v-for="i in BAR_COUNT"
      :y="getBarStartY()"
      :height="getBarHeight()"
    />
  </svg>
</template>
  
<script setup lang="ts">
  import {
    computed,
    onMounted,
    ref,
    type ComputedRef,
    type Ref
  } from 'vue';
  import { gsap } from 'gsap'
import { SizeWatcher } from '@/SizeWatcher';

  const LINES_PER_GROUP: number = 5
  const LINE_GROUP_COUNT: number = 4
  const LINE_SPACING: number = 50

  const MIN_BAR_HEIGHT: number = 10
  const MAX_BAR_HEIGHT: number = 500
  const BAR_COUNT: number = 5
  const BAR_TRAVEL_DISTANCE: number = 100

  const titleBackground: Ref<HTMLElement | null> = ref(null)

  const heightWatcher: SizeWatcher = new SizeWatcher(titleBackground, false, true)

  const bars: Ref<HTMLElement[]> = ref([])

  const lineGroupHeight: ComputedRef<number> = computed(() => LINE_SPACING * LINES_PER_GROUP)

  function getLineGroupStartY(index: number): number {
    return (index - 1) * lineGroupHeight.value
  }
  function getLineStartY(groupIndex: number, lineInGroupIndex: number): number {
    return getLineGroupStartY(groupIndex) + (lineInGroupIndex - 1) * LINE_SPACING
  }

  function getBarStartY(): number {
    return Math.random() * heightWatcher.height.value
  }
  function getBarHeight(): number {
    return Math.random() * (MAX_BAR_HEIGHT - MIN_BAR_HEIGHT) + MIN_BAR_HEIGHT
  }

  function startBackgroundAnimation() {
    gsap.to(
      ".line-group",
      {
        y: `-=${ lineGroupHeight.value }`,
        duration: 10,
        repeat: -1,
        ease: "none"
      }
    )
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

  onMounted(() => {
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