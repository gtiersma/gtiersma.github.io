<template>
  <div class="faq thm-background-dark fnt-text-dark">
    <div class="collapse-header" @click="click()">
      <h4 class="question">{{ props.question }}</h4>
      <h3 class="character" :id="showId">+</h3>
      <h3 class="character hide-character" :id="hideId">-</h3>
    </div>

    <div class="collapse-body" :id="bodyId" ref="collapseBody">
      <vue-br/>
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, type ComputedRef, type Ref } from 'vue';
import { gsap } from 'gsap'

const props = defineProps({
  question: String,
  id: Number
})

const show: Ref<boolean> = ref(false)

const bodyHeight: Ref<number> = ref(0)

const collapseBody: Ref<HTMLElement | null> = ref(null)

function click() {
  if (show.value) {
    collapseTween.value.reverse()
    showCharacterTween.value.reverse()
    hideCharacterTween.value.play()
  } else {
    collapseTween.value.play()
    showCharacterTween.value.play()
    hideCharacterTween.value.reverse()
  }
  show.value = !show.value
}

function getCharacterTween(hashId: string): GSAPTween {
  return gsap.to(
    hashId,
    {
      opacity: 0,
      duration: 0.5
    }
  )
}

const bodyId: ComputedRef<string> = computed(() => `collapse-body-${ props.id }`)
const showId: ComputedRef<string> = computed(() => `show-character-${ props.id }`)
const hideId: ComputedRef<string> = computed(() => `hide-character-${ props.id }`)

const collapseTween: ComputedRef<GSAPTween> = computed(() =>
  gsap.to(
    `#${ bodyId.value }`,
    {
      height: bodyHeight.value,
      duration: 0.5
    }
  )
)

const showCharacterTween: ComputedRef<GSAPTween> = computed(() =>
  getCharacterTween(`#${ showId.value }`)
)
const hideCharacterTween: ComputedRef<GSAPTween> = computed(() =>
  getCharacterTween(`#${ hideId.value }`)
)

onMounted(() => {
  bodyHeight.value = (collapseBody.value?.clientHeight ?? 0) + 50
  gsap.set(
    `#${ bodyId.value }`,
    { height: 0 }
  )
  hideCharacterTween.value.play
})
</script>

<style scoped>
  h3 {
    padding: 0;
  }

  .faq {
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
    margin: 0;
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

  @media (max-width: 992px) {
    h4 {
      font-size: 13pt;
    }

    .faq {
      margin: 20px 50px;
    }
  }
</style>