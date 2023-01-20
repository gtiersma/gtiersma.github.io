<template>
  <div class="divided-section">
    <div class="divider">
      <svg
        :width="`${ TOP_CURVE.xStart }px`"
        :height="`${ TOP_CURVE.height }px`"
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
        :width="`${ TOP_CURVE.width }px`"
        :height="`${ TOP_CURVE.height }px`"
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
        :width="`${ pageWidth - (TOP_CURVE.xStart + TOP_CURVE.width) }px`"
        :height="`${ TOP_CURVE.height }px`"
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
        :width="`${ BOTTOM_CURVE.xStart }px`"
        :height="`${ BOTTOM_CURVE.height }px`"
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
        :width="`${ BOTTOM_CURVE.width }px`"
        :height="`${ BOTTOM_CURVE.height }px`"
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
        :width="`${ pageWidth - (BOTTOM_CURVE.xStart + BOTTOM_CURVE.width) }px`"
        :height="`${ BOTTOM_CURVE.height }px`"
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

<script lang="ts">
import { defineComponent } from 'vue'
import { PAGE_WIDTH } from '@/Constants';

export default defineComponent({
  data() {
    return {
      TOP_CURVE: {
        xStart: 150,
        width: 50,
        height: 50
      },
      BOTTOM_CURVE: {
        xStart: 250,
        width: 50,
        height: 30
      },
      pageWidth: PAGE_WIDTH
    }
  }
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