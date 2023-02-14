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
import { SizeWatcher } from '@/common/SizeWatcher';
import gsap from 'gsap';
import { computed, onMounted, ref, type ComputedRef, type Ref, watch, nextTick } from 'vue';

/**
 * The animated background behind the page that can be seen within the page's margins
 */

// The spacing between each line:
const LINE_SPACING: number = 10
const LINE_HEIGHT: number = 10

// How many lines exist in a group:
// Lines are animated in groups (instead of individually) to improve efficiency:
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

/**
 * How far above the viewport a group of lines must travel
 * until that group is completely out of sight.
 */
const lineSpaceOutOfView: ComputedRef<number> = computed(() =>
  (lineGroupCount.value * lineGroupHeight.value) - heightWatcher.height.value
)

/**
 * A 2d array that contains an array for each group.
 * 
 * Within that array is the starting position on the y axis of each line
 * within its corresponding group.
 */
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

/**
 * Updates positions for when the user triggers the viewport to change its size
 */
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
        duration: 100,
        repeat: -1,
        ease: "none",
        onRepeatParams: [it],
        onRepeat: lineGroupAnimRepeat
      }
    )
  })
} 

/**
  * Keeps the lines smoothly moving forward after each animation cycle
  * 
  * @param lineGroup The element containing a group of lines that just finished an animation cycle.
  */
function lineGroupAnimRepeat(lineGroup: HTMLElement) {

  // Half of the out-of-view space
  const halfSpacing = lineSpaceOutOfView.value / 2

  // Get the line's Y position (technically the point where the animation started - the animation doesn't count)
  const y = Number(lineGroup.getAttribute("y"))

  // The Y position the line should be moved to
  // (technically the Y position the line appears to currently have now - counting the animation)
  let newY: number

  // Ensure that if the bar is high enough beyond the top of the page that it cannot be seen that it loops to under the svg:
  if (y < -halfSpacing) {
    newY = heightWatcher.height.value + halfSpacing
  } else {
    newY = y - lineGroupHeight.value
  }

  // Set that as the Y position:
  lineGroup.setAttribute("y", String(newY))
}

watch(heightWatcher.height, () => resizeUpdate())

onMounted(() => {
  heightWatcher.start()

  // Another tick is needed to pass for the values to load for the animation for some reason:
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