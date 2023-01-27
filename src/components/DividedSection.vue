<template>
  <div class="container-sm divided-section">
    <div class="divider">
      <svg
        :width="topCurve?.xStartCss"
        :height="topCurve?.heightCss"
        viewBox="0 0 1 100"
        preserveAspectRatio="none"
      >
        <rect
          class="background-color"
          x="0"
          y="0"
          width="1px"
          height="100px"
        />
        <rect
          class="line-color"
          x="0"
          y="0"
          width="1px"
          height="5px"
        />
      </svg>

      <svg
        :width="topCurve?.widthCss"
        :height="topCurve?.heightCss"
        viewBox="0 0 26.5 27.1"
        preserveAspectRatio="none"
      >
        <path
          class="line-color"
          d="M -0.52916667,0 C 6.0518304,0.07940835 11.889344,9.9988105 13.229167,13.229167 c 1.394015,3.347792 7.350175,12.691392 13.758333,12.7 V 26.9875 H -0.52916667 Z"
        />
        <path
          class="background-color"
          d="m -1.4552085,1.1 c 6.5809972,0.07941 12.4185115,9.9988109 13.7583345,13.2291669 1.394015,3.347792 7.350175,12.691392 13.758333,12.7 v 1.058333 H -1.4552085 Z"
        />
      </svg>

      <svg
        :width="topCurve?.rightEdgeDistanceCss"
        :height="topCurve?.height"
        viewBox="0 0 1 100"
        preserveAspectRatio="none"
      >
        <rect
          class="line-color"
          x="0"
          y="96px"
          width="1px"
          height="5px"
        />
      </svg>
    </div>

    <div class="background-color content">
      <slot/>
    </div>

    <div class="divider">
      <svg
        :width="bottomCurve?.xStartCss"
        :height="bottomCurve?.heightCss"
        viewBox="0 0 1 100"
        preserveAspectRatio="none"
      >
        <rect
          class="background-color"
          x="0"
          y="0"
          width="1px"
          height="100px"
        />
        <rect
          class="line-color"
          x="0"
          y="95px"
          width="1px"
          height="5px"
        />
      </svg>

      <svg
        :width="bottomCurve?.widthCss"
        :height="bottomCurve?.heightCss"
        viewBox="0 -27.1 26.5 27.1"
        preserveAspectRatio="none"
      >
        <path
          class="line-color"
          d="M -0.52916667,0 C 6.0518304,0.07940835 11.889344,9.9988105 13.229167,13.229167 c 1.394015,3.347792 7.350175,12.691392 13.758333,12.7 V 26.9875 H -0.52916667 Z"
          transform="scale(1, -1)"
        />
        <path
          class="background-color"
          d="m -1.4552085,1 c 6.5809972,0.07941 12.4185115,9.9988109 13.7583345,13.2291669 1.394015,3.347792 7.350175,12.691392 13.758333,12.7 v 1.058333 H -1.4552085 Z"
          transform="scale(1, -1)"
        />
      </svg>

      <svg
        :width="bottomCurve?.rightEdgeDistanceCss"
        :height="bottomCurve?.heightCss"
        viewBox="0 0 1 100"
        preserveAspectRatio="none"
      >
        <rect
          class="line-color"
          x="0"
          y="0"
          width="1px"
          height="5px"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref, onMounted } from 'vue';

class Curve {
  distanceFromRightEdge: number = 0

  constructor(
    readonly xStart: number,
    readonly width: number,
    readonly height: number,
    pageWidth: number
  ) {
    this.distanceFromRightEdge = pageWidth - (xStart + width)
  }

  get xStartCss(): string { return `${ this.xStart }px` }
  get widthCss(): string { return `${ this.width }px` }
  get heightCss(): string { return `${ this.height }px` }
  get rightEdgeDistanceCss(): string {
    return `${ this.distanceFromRightEdge }px`
  }
}

const props = defineProps({
  pageWidth: Number
})

const topCurve: Ref<Curve | null> = ref(null)
const bottomCurve: Ref<Curve | null> = ref(null)

onMounted(() => {
  topCurve.value = new Curve(
    150,
    50,
    50,
    props.pageWidth ?? 0
  )
  bottomCurve.value = new Curve(
    250,
    50,
    30,
    props.pageWidth ?? 0
  )
})
</script>

<style scoped>
.divided-section {
  top: -50px;
  z-index: 25;
}

.line-color {
  fill: #19c;
}

.background-color {
  fill: #a20;
  background-color: #a20;
}

.divider {
  width: 100%;
  display: inline;
}

.content {
  padding: 20px 0 50px 0;
}
</style>