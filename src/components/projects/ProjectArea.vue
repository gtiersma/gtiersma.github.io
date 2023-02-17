<template>
  <div id="project-area" class="fnt-text-dark">
    <h2 class="fnt-main-dark">Work that I have done</h2>

    <vue-br/>
    
    <p>A few of the more notable projects that I have worked on</p>

    <p class="swipe-message fnt-main-dark">SWIPE BELOW TO VIEW DIFFERENT PROJECTS</p>

    <!-- PROJECT SWIPER -->
    <div class="bdr-main" id="projects">
      <div class="swiper" @mouseenter="showInfo()" @mouseleave="hideInfo()">

        <div class="swiper-wrapper">
          <div class="swiper-slide fnt-background" v-for="project in projects">

            <!-- IMAGE (mobile only) -->
            <img class="mobile-image" :src="project.imgPath"/>

            <!-- TEXT -->
            <div class="text-container front">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="text front" v-for="paragraph in project.description">{{ paragraph }}</p>
              <a
                class="btn thm-button"
                v-show="!!project.link"
                :href="project.link"
              >View Project</a>
            </div>

            <!-- IMAGES (desktop only - cover image is for the hover effect) -->
            <img class="cover-image" :src="project.coverImgPath"/>
            <img class="back" :src="project.imgPath"/>

          </div>
        </div>

        <!-- NAV ARROWS -->
        <div
          class="swiper-button-next fnt-background"
          @mouseenter="runShadeTween(NEXT_CLASS)"
          @mouseleave="reverseShadeTween(NEXT_CLASS, HIDDEN_OPACITY)"
        />
        <div
          class="swiper-button-prev fnt-background"
          @mouseenter="runShadeTween(PREV_CLASS)"
          @mouseleave="reverseShadeTween(PREV_CLASS, HIDDEN_OPACITY)"
        />

      </div>
    </div>

    <vue-br/>

    <p>
      There are even more projects that I have worked on. They have been omitted because they are rather "informal" for a
      professional portfolio. Feel free to contact me if interested in hearing about some of those projects.
    </p>
  </div>
</template>
  
<script setup lang="ts">
  import gsap from 'gsap';
  import Swiper, { Navigation, Pagination } from 'swiper';
  import { onMounted } from 'vue';
  import { Project, Projects } from './Projects';

  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  Swiper.use([Navigation, Pagination]);

  // Opacities for hover effects:
  const HIDDEN_OPACITY: string = "50%"
  const TEXT_HIDDEN_OPACITY: string = "20%"

  // Classes for easy access
  const IMG_CLASS: string = ".cover-image"
  const TITLE_CLASS: string = ".project-title"
  const TEXT_CLASS: string = ".text"
  const NEXT_CLASS: string = ".swiper-button-next"
  const PREV_CLASS: string = ".swiper-button-prev"

  const projects: Project[] = Projects

  let swiper: Swiper | null = null

  /**
   * The blurred image animation
   */
  function runImgTween() {
    gsap.to(
      IMG_CLASS,
      {
        duration: 0.5,
        opacity: "100%"
      }
    )
  }
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

  /**
   * Tween animation reversal functions:
   */
  function reverseImgTween() {
    gsap.to(
      IMG_CLASS,
      {
        duration: 0.5,
        opacity: 0
      }
    )
  }
  function reverseShadeTween(cssClass: string, opacity: string) {
    gsap.to(
      cssClass,
      {
        duration: 0.5,
        opacity: opacity,
        textShadow: "none"
      }
    )
  }

  /**
   * Making the text more/less visible for hovering
   */
  function showInfo() {
    runImgTween()
    runShadeTween(TITLE_CLASS)
    runShadeTween(TEXT_CLASS)
  }
  function hideInfo() {
    reverseImgTween()
    reverseShadeTween(TITLE_CLASS, HIDDEN_OPACITY)
    reverseShadeTween(TEXT_CLASS, TEXT_HIDDEN_OPACITY)
  }

  onMounted(() =>
    swiper = new Swiper(".swiper", {
      loop: true,
      cssMode: true,
      simulateTouch: false,
      navigation: {
        nextEl: NEXT_CLASS,
        prevEl: PREV_CLASS,
      },
      breakpoints: {
        992: {
          navigation: {}
        }
      }
    })
  )
</script>
  
<style scoped>
  img {
    width: inherit;
    height: 60vh;
    object-fit: cover;
  }

  a {
    display: block;
    padding: 5px 30px;
    width: 175px;
    margin: 10px auto;
  }

  h3, .text {
    text-align: center;
  }

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

  .cover-image {
    position: absolute;
    opacity: 0;
  }

  .mobile-image {
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

  .text {
    opacity: 20%;
    padding: 5px 100px;
  }

  .text-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 992px) {
    img {
      display: none;
    }

    h3, .text {
      color: #262425;
      opacity: 100%;
      padding: 5px 10px;
    }

    #projects {
      margin: 20px 0;
      padding: 10px 0;
      border: none;
    }

    .mobile-image {
      display: block;
    }

    .swipe-message {
      display: block;
    }

    .text-container {
      position: static;
    }

    .swiper-button-next, .swiper-button-prev {
      display: none;
    }
  }
</style>