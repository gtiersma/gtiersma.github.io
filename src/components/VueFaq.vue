<template>
  <div class="faq">
    <div class="collapse-header" @click="click()">
      <h4 class="question">{{ question }}</h4>
      <h3 class="character" :id="showId">+</h3>
      <h3 class="character hide-character" :id="hideId">-</h3>
    </div>

    <div class="collapse-body" :id="bodyId" ref="collapseBody">
      <br/>
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { gsap } from 'gsap'

export default defineComponent({
  props: {
    question: { type: String, required: true },
    id: { type: Number, required: true }
  },
  data() {
    return {
      show: false,
      bodyHeight: -1
    }
  },
  methods: {
    click() {
      if (this.show) {
        this.collapseTween.reverse()
        this.showCharacterTween.reverse()
        this.hideCharacterTween.play()
      } else {
        this.collapseTween.play()
        this.showCharacterTween.play()
        this.hideCharacterTween.reverse()
      }
      this.show = !this.show
    },
    getCharacterTween(hashId: string): GSAPTween {
      return gsap.to(
        hashId,
        {
          opacity: 0,
          duration: 0.5
        }
      )
    }
  },
  computed: {
    showCharacter(): string { return this.show ? "-" : "+" },
    bodyId(): string { return `collapse-body-${ this.id }` },
    showId(): string { return `show-character-${ this.id }` },
    hideId(): string { return `hide-character-${ this.id }` },
    collapseTween(): GSAPTween {
      return gsap.to(
        `#${ this.bodyId }`,
        {
          height: this.bodyHeight,
          duration: 0.5
        }
      )
    },
    showCharacterTween(): GSAPTween {
      return this.getCharacterTween(`#${ this.showId }`)
    },
    hideCharacterTween(): GSAPTween {
      return this.getCharacterTween(`#${ this.hideId }`)
    }
  },
  mounted() {
    const bodyEl = this.$refs.collapseBody as any
    this.bodyHeight = bodyEl.clientHeight
    gsap.set(
      `#${ this.bodyId }`,
      { height: 0 }
    )
    this.hideCharacterTween.play
  }
})
</script>

<style scoped>
  .faq {
    background-color: #203429;
    padding: 10px;
    margin: 20px 100px;
    border-radius: 20px;
  }

  .collapse-header {
    cursor: pointer;
    margin: 0 10px;
  }

  .collapse-body {
    overflow: hidden;
    margin: 5px 20px;
  }

  .question {
    display: inline;
  }

  .character {
    font-family: "ExoBd";
    float: right;
  }

  .hide-character {
    position: relative;
    left: 10px;
  }
</style>