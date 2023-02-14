<template>

  <!-- CHANGING LINES OF CODE -->
  <svg class="svg far-back">
    <text
      class="font thm-background-dark"
      v-for="(line, i) in codeLines"
      x="70"
      :y="getLineY(i)"
    >
      {{ line.text }}
    </text>
  </svg>

  <!-- GIANT BACKGROUND ICONS -->
  <fa-icon
    class="icon fnt-background-dark back"
    id="chip"
    icon="fa-solid fa-microchip"
  />
  <fa-icon
    class="icon fnt-background-dark back"
    id="wrench"
    icon="fa-solid fa-wrench"
  />

</template>
  
<script setup lang="ts">
  import { SizeWatcher } from '@/common/SizeWatcher';
  import { onMounted, reactive, watch } from 'vue';
  import { CodeLines } from './CodeLine';

  /**
   * The animated background that exists behind the webpage's title
   * 
   * Takes a SizeWatcher that is watching the title area's height
   * to use to responsively space the lines of code across the title area.
   */
  const props = defineProps({
    heightWatcher: SizeWatcher
  })

  const codeLines = reactive(CodeLines)

  /**
   * Get the y position that a certain line of code should be positioned at
   * 
   * The formula tries to keep the lines of code in view and evenly spaced out
   * 
   * @param lineIndex The index of the line of code in the codelines array
   */
  function getLineY(lineIndex: number): number {
    const containerHeight = props.heightWatcher?.height.value ?? 0 
    return (lineIndex + 0.5) * (containerHeight / codeLines.length)
  }

  /**
   * Begin transforming all of the lines of code to their next line
   */
  function startAnimation() {
    codeLines.forEach(it => it.changeLine())
  }

  /**
   * Once all lines have finished transforming to the next line of code, start animating them all to the next line of code.
   */
  watch(codeLines, newLines => {
    if (newLines.every(it => it.isReadyForNextLine)) {
      startAnimation()
    }
  })

  onMounted(() => startAnimation())
</script>
  
<style scoped>
#chip {
  top: 15vh;
  left: 30%;
}

#wrench {
  top: 25vh;
  left: 40%;
}

.icon {
  position: absolute;
  font-size: 256pt;
  filter: drop-shadow(0 0 10px #a73b0c);
}

.font {
  font-family: "ExoMd";
  font-size: 27pt;
  filter: drop-shadow(0 0 5px #d5792c) drop-shadow(0 0 5px #d5792c);
}

.svg {
  width: 100vw;
  height: 90vh;
  position: absolute;
}

.bar {
  width: 100vw;
}

@media (max-width: 767px) {
  .svg {
    display: none;
  }

  .icon {
    font-size: 128pt;
  }

  #chip {
    left: 20%;
  }

  #wrench {
    left: 25%;
  }
}
</style>