<template>
  <svg ref="svg">
    <defs>
      <filter id="backgroud-blur" x="0" y="0">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
      </filter>
    </defs>

    <g v-for="group in lineGroups" filter="url(#backgroud-blur)">
      <rect v-for="y in group" :height="LINE_HEIGHT" :y="y"/>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { SizeWatcher } from '@/SizeWatcher';
import { computed, onMounted, ref, type ComputedRef, type Ref, watch } from 'vue';

const LINE_SPACING: number = 10
const LINE_HEIGHT: number = 10

const LINE_GROUP_SIZE: number = 10

const linePositions: Ref<number[]> = ref([])

const svg: Ref<HTMLElement | null> = ref(null)

const heightWatcher: SizeWatcher = new SizeWatcher(svg, false, true)

const lineCount: ComputedRef<number> = computed(() =>
  (heightWatcher.height.value * 1.1) / (LINE_HEIGHT + LINE_SPACING)
)
const groupCount: ComputedRef<number> = computed(() =>
  Math.ceil(lineCount.value / LINE_GROUP_SIZE)
)

const lineGroups: ComputedRef<number[][]> = computed(() => {
  const groupedLines: number[][] = []
  for (let i = 0; i < groupCount.value; i++) {
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

watch(heightWatcher.height, () => resizeUpdate())

onMounted(() => heightWatcher.start())
</script>

<style scoped>
svg {
  position: fixed;
  background-color: darkcyan;
  height: 100vh;
  width: 100vw;
}

rect {
  width: 100%;
  color: lightgray;
}
</style>