<template>
  <svg class="svg" ref="title-background">
    <text
      class="font"
      v-for="i in LINE_COUNT"
      :x="-20"
      :y="i * SPACING"
    >aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</text>
  </svg>

  <fa-icon class="icon" id="chip" icon="fa-solid fa-microchip"/>
  <fa-icon class="icon" id="wrench" icon="fa-solid fa-wrench" />

  <svg class="svg" id="title-foreground">
    <rect
      :id="`bar${ i }`"
      ref="bar"
      v-for="i in BAR_COUNT"
      :y="getBarStartY()"
      :width="pageWidth"
      :height="getBarHeight()"
    />
  </svg>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  import { gsap } from 'gsap'
  import { PAGE_WIDTH } from '@/Constants';
  
  export default defineComponent({
    data() {
      return {
        LINE_COUNT: 30,
        BAR_COUNT: 5,
        BAR_TRAVEL_DISTANCE: 100,
        SPACING: 50,
        pageWidth: PAGE_WIDTH,
        backgroundHeight: null
      }
    },

    methods: {
      getBarStartY(): number {
        return Math.random() * (this.backgroundHeight ?? 0)
      },
      getBarHeight(): number {
        const MIN_HEIGHT = 10
        const MAX_HEIGHT = 500
        return Math.random() * (MAX_HEIGHT - MIN_HEIGHT) + MIN_HEIGHT
      },
      startBackgroundAnimation() {
        gsap.to(
          ".font",
          {
            y: `-=${ this.SPACING }`,
            duration: 2,
            repeat: -1,
            ease: "none"
          }
        )
      },
      startForegroundAnimation() {
        const bars = this.$refs.bar as any[]
        bars.forEach((it, i) => {
          gsap.to(
            `#bar${ i + 1 }`,
            {
              y: `-=${ this.BAR_TRAVEL_DISTANCE }`,
              duration: 2,
              repeat: -1,
              ease: "none",
              onRepeatParams: [it],
              onRepeat: this.barOnAnimationRepeat
            }
          )
        })
      },
      barOnAnimationRepeat(bar: any) {
        const y = bar.getAttribute("y")
        const height = bar.getAttribute("height")
        let startingHeight: number
        if (y < -height) {
          startingHeight = this.backgroundHeight ?? 0
        } else {
          startingHeight = y - this.BAR_TRAVEL_DISTANCE
        }
        bar.setAttribute("y", startingHeight)
      }
    },

    mounted() {
      const titleBackground = this.$refs["title-background"] as any
      this.backgroundHeight = titleBackground.clientHeight

      this.startBackgroundAnimation()
      this.startForegroundAnimation()
    }
  })
</script>
  
<style scoped>
#title-foreground {
  z-index: 20;
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
  width: 100%;
  height: 80vh;
  position: absolute;
}
</style>