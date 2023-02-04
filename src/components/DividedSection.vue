<template>
  <div class="divided-section far-front">
    <div class="divider top-divider">
      <svg
        :width="topCurve?.xStartCss"
        :height="topCurve?.heightCss"
        viewBox="0 0 1 100"
        preserveAspectRatio="none"
      >
        <rect
          class="thm-background"
          x="0"
          y="0"
          width="1px"
          height="100px"
        />
        <rect
          class="thm-main-dark"
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
          class="thm-main-dark"
          d="M -0.52916667,0 C 6.0518304,0.07940835 11.889344,9.9988105 13.229167,13.229167 c 1.394015,3.347792 7.350175,12.691392 13.758333,12.7 V 26.9875 H -0.52916667 Z"
        />
        <path
          class="thm-background"
          d="m -1.4552085,1.1 c 6.5809972,0.07941 12.4185115,9.9988109 13.7583345,13.2291669 1.394015,3.347792 7.350175,12.691392 13.758333,12.7 v 1.058333 H -1.4552085 Z"
        />
      </svg>

      <svg
        :width="topCurve?.rightEdgeDistanceCss?.value"
        :height="topCurve?.height"
        viewBox="0 0 1 100"
        preserveAspectRatio="none"
      >
        <rect
          class="thm-main-dark"
          x="0"
          y="96px"
          :width="topCurve?.rightEdgeDistanceCss?.value"
          height="5px"
        />
      </svg>
    </div>

    <div class="thm-background content">
      <slot/>
    </div>

    <div class="divider bottom-divider">
      <svg
        :width="bottomCurve?.xStartCss"
        :height="bottomCurve?.heightCss"
        viewBox="0 0 1 100"
        preserveAspectRatio="none"
      >
        <rect
          class="thm-background"
          x="0"
          y="0"
          width="1px"
          height="100px"
        />
        <rect
          class="thm-main-dark"
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
          class="thm-main-dark"
          d="M -0.52916667,0 C 6.0518304,0.07940835 11.889344,9.9988105 13.229167,13.229167 c 1.394015,3.347792 7.350175,12.691392 13.758333,12.7 V 26.9875 H -0.52916667 Z"
          transform="scale(1, -1)"
        />
        <path
          class="thm-background"
          d="m -1.4552085,1 c 6.5809972,0.07941 12.4185115,9.9988109 13.7583345,13.2291669 1.394015,3.347792 7.350175,12.691392 13.758333,12.7 v 1.058333 H -1.4552085 Z"
          transform="scale(1, -1)"
        />
      </svg>

      <svg
        :width="bottomCurve?.rightEdgeDistanceCss?.value"
        :height="bottomCurve?.heightCss"
        viewBox="0 0 1 100"
        preserveAspectRatio="none"
      >
        <rect
          class="thm-main-dark"
          x="0"
          y="0"
          :width="topCurve?.rightEdgeDistanceCss?.value"
          height="5px"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SizeWatcher } from '@/SizeWatcher';
import { Curve } from './Curve';

const props = defineProps({
  pageWidth: SizeWatcher
})

let topCurve: Curve | null = new Curve(
  150,
  50,
  50,
  props.pageWidth
)
let bottomCurve: Curve | null = new Curve(
  250,
  50,
  30,
  props.pageWidth
)
</script>

<style scoped>
.divider {
  position: relative;
  top: -50px;
  width: 100%;
}

.content {
  position: relative;
  top: -50px;
  padding: 50px 0 20px 0;
}
</style>