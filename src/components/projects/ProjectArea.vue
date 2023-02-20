<template>
  <div id="project-area" class="fnt-text-dark">
    <h2 class="fnt-main-dark">Work that I have done</h2>

    <vue-br/>
    
    <p>A few of the more notable projects that I have worked on</p>

    <p class="swipe-message fnt-main-dark" v-show="isMobile">SWIPE BELOW TO VIEW DIFFERENT PROJECTS</p>

    <!-- PROJECT SWIPER -->
    <div
      class="bdr-main"
      id="projects"
      @mouseenter="showInfo = true"
      @mouseleave="showInfo = false"
    >
      <div class="swiper">

        <!-- CONTENT -->
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="project in projects">
            <vue-project class="desktop-project" :project="project" :show-info="showInfo"/>
            <mobile-project class="mobile-project" :project="project"/>
          </div>
        </div>

        <!-- NAV ARROWS -->
        <div
          v-if="!isMobile"
          class="swiper-button-next fnt-main-light"
          @mouseenter="runShadeTween(NEXT_CLASS)"
          @mouseleave="reverseShadeTween(NEXT_CLASS)"
        />
        <div
          v-if="!isMobile"
          class="swiper-button-prev fnt-main-light"
          @mouseenter="runShadeTween(PREV_CLASS)"
          @mouseleave="reverseShadeTween(PREV_CLASS)"
        />

      </div>
    </div>

    <p>
      There are even more projects that I have worked on. They have been omitted because they are rather "informal" for a
      professional portfolio. Feel free to contact me if interested in hearing about some of those projects.
    </p>
  </div>
</template>
  
<script setup lang="ts">
  import gsap from 'gsap';
  import Swiper, { Navigation, Pagination } from 'swiper';
  import { onMounted, ref, type Ref } from 'vue';
  import { Project, Projects } from './Projects';

  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  Swiper.use([Navigation, Pagination]);

  const NEXT_CLASS: string = ".swiper-button-next"
  const PREV_CLASS: string = ".swiper-button-prev"

  const projects: Project[] = Projects

  // Whether or not the client is detected to be using a mobile device
  const isMobile: boolean = !!navigator.userAgent.match(/Android/i) ||
    !!navigator.userAgent.match(/BlackBerry/i) ||
    !!navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
    !!navigator.userAgent.match(/Opera Mini/i) ||
    !!navigator.userAgent.match(/IEMobile/i)

  let swiper: Swiper | null = null

  // Whether or not the info related to the current project should be displayed to the user
  // Essentially, whether or not the user is hovering the cursor over the swiper
  const showInfo: Ref<boolean> = ref(false)
  
  /**
   * Text opacity/shading animation for hovering
   * 
   * @param cssClass The class to apply it to (must include period)
   */
  function runShadeTween(cssClass: string) {
    gsap.to(
      cssClass,
      {
        duration: 0.5,
        opacity: "100%",
        // Multiple text shadows to make the shadows darker:
        textShadow: "0 0 10px #000, 0 0 10px #000, 0 0 10px #000, 0 0 10px #000, 0 0 10px #000"
      }
    )
  }
  function reverseShadeTween(cssClass: string) {
    gsap.to(
      cssClass,
      {
        duration: 0.5,
        opacity: "50%",
        textShadow: "none"
      }
    )
  }

  /**
   * Swiper navigation arrows should only exist on desktop
   */
  onMounted(() => {
    swiper = new Swiper(".swiper", {
      loop: true,
      cssMode: true,
      simulateTouch: false,
      navigation: isMobile ? {} : {
        nextEl: NEXT_CLASS,
        prevEl: PREV_CLASS,
      }
    })
  })
</script>
  
<style scoped>
  #projects {
    margin: 20px 100px;
    padding: 10px;
    border-style: solid;
    border-width: 3px;
    border-radius: 10px;
  }

  #project-area {
    padding: 20px 0 100px 0;
  }

  .mobile-project {
    display: none;
  }

  .swiper-button-next, .swiper-button-prev, h3 {
    opacity: 50%;
  }

  .swipe-message {
    display: none;
    text-align: center;
    font-weight: bold;
  }

  @media (max-width: 992px) {
    #projects {
      margin: 20px 0;
      padding: 10px 0;
      border: none;
    }

    .swipe-message {
      display: block;
    }

    .desktop-project {
      display: none;
    }

    .mobile-project {
      display: block;
    }
  }
</style>