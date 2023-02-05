<template>
  <svg class="svg far-back" ref="titleBackground">
    <text
      class="font thm-background-dark"
      v-for="(line, i) in codeLines"
      x="70"
      :y="getLineStartY(i)"
    >
      {{ line.text }}
    </text>
  </svg>

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
  import {
nextTick,
    onMounted,
    reactive,
    ref,
    watch,
    type Ref
  } from 'vue';
  import { SizeWatcher } from '@/SizeWatcher';
  import { CodeLines } from './CodeLine';

  const props = defineProps({
    heightWatcher: SizeWatcher
  })

  const codeLines = reactive(CodeLines)

  const titleBackground: Ref<HTMLElement | null> = ref(null)

  function getLineStartY(lineIndex: number): number {
    const containerHeight = props.heightWatcher?.height.value ?? 0 
    return (lineIndex + 1) * (containerHeight / codeLines.length)
  }

  function startAnimation() {
    codeLines.forEach(it => it.changeLine())
  }

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
  height: 80vh;
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