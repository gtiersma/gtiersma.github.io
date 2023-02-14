<template>
  <div class="faq thm-background-dark fnt-text-dark">

    <!-- HEADER -->
    <div class="collapse-header" @click="click()">
      <h4 class="question">{{ props.question }}</h4>
      <h3 class="character" :id="showId">+</h3>
      <h3 class="character hide-character" :id="hideId">-</h3>
    </div>

    <!-- SHOW-ABLE CONTENT -->
    <div class="collapse-body" :id="bodyId" ref="collapseBody">
      <vue-br/>
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, type ComputedRef, type Ref } from 'vue';
import { gsap } from 'gsap'

/**
 * A question with an answer in a collapse-able body.
 * 
 * The question is taken as a prop (along with an ID number unique among instances of this component).
 * 
 * The answer must be provided as a slot. This allows the parent to format the answer in the manner preferred.
 */
const props = defineProps({
  question: String,
  id: Number
})

// Whether or not the answer is currently shown
const show: Ref<boolean> = ref(false)

// Used to track what the height of the collapse's body was before it was closed
const bodyHeight: Ref<number> = ref(0)

// The show-able content
const collapseBody: Ref<HTMLElement | null> = ref(null)

/**
 * When the user clicks the collapse header to show or hide the content
 */
function click() {
  if (show.value) hideContent()
  else showContent()
  show.value = !show.value
}

function showContent() {
  getCollapseTween(true).play()
  showIconTween.value.play()
  hideIconTween.value.reverse()
}

function hideContent() {

  // Before we hide, we need to track what the height currently is
  bodyHeight.value = collapseBody.value?.clientHeight ?? 0

  // The element's height would currently be "auto" right here.
  // "auto" is not an animatable value, so we need to set it to its actual height to a numerical form for it to close smoothly:
  gsap.set(
    hashBodyId.value,
    { height: bodyHeight.value }
  )

  getCollapseTween(false).play()
  showIconTween.value.reverse()
  hideIconTween.value.play()
}

/**
 * Set the body's height to auto
 * 
 * We want the height to be auto whenever the content is shown to allow the body to automatically resize responsively
 */
function toAutoHeight() {
  gsap.set(
    hashBodyId.value,
    { height: "auto" }
  )
}

/**
 * Gets a tween object for showing or hiding the content
 * 
 * @param show Whether or not the tween being returned is for showing or hiding
 */
function getCollapseTween(show: boolean): GSAPTween {
  return gsap.to(
    hashBodyId.value,
    {
      height: show ? bodyHeight.value : 0,
      duration: 0.5,
      onComplete: show ? () => toAutoHeight() : undefined
    }
  )
}

/**
 * Gets a tween for either the show or hide icon
 * 
 * @param hashId The DOM ID (including the #) of which icon element this tween should be assigned to
 */
function getIconTween(hashId: string): GSAPTween {
  return gsap.to(
    hashId,
    {
      opacity: 0,
      duration: 0.5
    }
  )
}

const hashBodyId: ComputedRef<string> = computed(() => `#${ bodyId.value }`)
const bodyId: ComputedRef<string> = computed(() => `collapse-body-${ props.id }`)
const showId: ComputedRef<string> = computed(() => `show-icon-${ props.id }`)
const hideId: ComputedRef<string> = computed(() => `hide-icon-${ props.id }`)

const showIconTween: ComputedRef<GSAPTween> = computed(() =>
  getIconTween(`#${ showId.value }`)
)
const hideIconTween: ComputedRef<GSAPTween> = computed(() =>
  getIconTween(`#${ hideId.value }`)
)

onMounted(() => {

  // When mounted, the collapse is actually already shown.
  // This is only so that we can get the height that the collapse should open up to when the user clicks it:
  bodyHeight.value = collapseBody.value?.clientHeight ?? 0

  // Now that we have that height, we can hide the collapse:
  gsap.set(
    hashBodyId.value,
    { height: 0 }
  )

  // The collapse is now hidding, so hide the hide icon (so only the show icon is visible):
  hideIconTween.value.play
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