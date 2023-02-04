<template>
  <svg class="thm-main far-far-back" ref="svg">
    <defs>
      <filter id="backgroud-blur" x="0" y="0">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
      </filter>
    </defs>

    <g
      v-for="(group, i) in lineStartYGroups"
      :id="`line-group-${ i }`"
      ref="lineGroups"
      filter="url(#backgroud-blur)"
    >
      <rect
        v-for="y in group"
        class="thm-main-light"
        :height="LINE_HEIGHT"
        :y="y"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
import { SizeWatcher } from '@/SizeWatcher';
import gsap from 'gsap';
import { computed, onMounted, ref, type ComputedRef, type Ref, watch, nextTick } from 'vue';

const LINE_SPACING: number = 10
const LINE_HEIGHT: number = 10

const LINE_GROUP_SIZE: number = 10

const linePositions: Ref<number[]> = ref([])

const svg: Ref<HTMLElement | null> = ref(null)
const lineGroups: Ref<HTMLElement[]> = ref([])

const heightWatcher: SizeWatcher = new SizeWatcher(svg, false, true)

const lineCount: ComputedRef<number> = computed(() =>
  lineGroupCount.value * LINE_GROUP_SIZE
)
const lineGroupCount: ComputedRef<number> = computed(() => 
  Math.ceil(heightWatcher.height.value / LINE_GROUP_SIZE) + 2
)

const lineGroupHeight: ComputedRef<number> = computed(() =>
  (LINE_HEIGHT + LINE_SPACING) * LINE_GROUP_SIZE
)

const lineSpaceOutOfView: ComputedRef<number> = computed(() =>
  (lineGroupCount.value * lineGroupHeight.value) - heightWatcher.height.value
)

const lineStartYGroups: ComputedRef<number[][]> = computed(() => {
  const groupedLines: number[][] = []
  for (let i = 0; i < lineGroupCount.value; i++) {
    groupedLines.push([])
    for (let j = 0; j < LINE_GROUP_SIZE; j++) {
      groupedLines[i].push(
        linePositions.value[i * LINE_GROUP_SIZE + j]
      )
    }
  }
  return groupedLines
})

function resizeUpdate() {
  linePositions.value = Array.from(
    { length: lineCount.value },
    (x, i) => i
  ).map(it =>
    it * (LINE_SPACING + LINE_HEIGHT)
  )
}

function startAnimation() {
  lineGroups.value.forEach(it => {
    gsap.to(
      `#${ it.id }`,
      {
        y: `-=${ lineGroupHeight.value }`,
        duration: 20,
        repeat: -1,
        ease: "none",
        onRepeatParams: [it],
        onRepeat: lineGroupAnimRepeat
      }
    )
  })
} 

function lineGroupAnimRepeat(lineGroup: HTMLElement) {
  const y = Number(lineGroup.getAttribute("y"))

  const halfSpacing = lineSpaceOutOfView.value / 2

  let newY: number
  if (y < -halfSpacing) {
    newY = heightWatcher.height.value + halfSpacing
  } else {
    newY = y - lineGroupHeight.value
  }
  lineGroup.setAttribute("y", String(newY))
}

watch(heightWatcher.height, () => resizeUpdate())

onMounted(() => {
  heightWatcher.start()
  nextTick(() => startAnimation())
})
</script>

<style scoped>
svg {
  position: fixed;
  height: 100vh;
  width: 100vw;
}

rect {
  width: 100vw;
}
</style>