<template>
  <div id="contact-area" class="thm-main-light fnt-text-dark">
    <h5>Contact</h5>

    <ul>
      <li>
        <a href="mailto:gtiersma@proton.me">
          <fa-icon class="icon" icon="fa-envelope"/>
          gtiersma@proton.me
        </a>
      </li>

      <li>
        <a href="tel:+5039912686">
          <fa-icon class="icon" icon="fa-phone"/>
          (503) 991-2686
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/gtiersma/">
          <fa-icon class="icon" icon="fa-brands fa-linkedin-in"/>
          LinkedIn
        </a>
      </li>

      <li>
        <a href="https://github.com/gtiersma">
          <fa-icon class="icon" icon="fa-brands fa-github"/>
          GitHub
        </a>
      </li>
    </ul>

    <div class="legal">
      <p>
        The font <b>Exo</b> was provided free of charge by Natanael Gama and Robin Mientjes
        (protected under the Open Font Licsense).
        The font <b>Roboto</b> was provided free of charge by Christian Robertson (protected under the Apache License v2.0).
      </p>
      <p>
        Icons in the title and footer were provided free of charge by © Fonticons, Inc (protected under the CC BY4.0 licsense).
      </p>
      <p>
        Majority of the images used in this website are copywrited and/or contain copywrited logos.
        These were used without permission and are property of their respective owners.
        They may be removed by request from the copywrite holder.
      </p>
    </div>
  </div>
</template>
  
<script setup lang="ts">
/**
 * The footer area of the website that displays contact info & links
 */
</script>
  
<style scoped>
  h5 {
    padding: 0 0 5px 30px;
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    width: fit-content;
    display: inline-block;
  }

  a {
    cursor: pointer;
    font-size: 10pt;
  }

  p {
    font-size: 6pt;
    padding-top: 0;
    padding-bottom: 0;
  }

  .icon {
    padding-right: 10px;
    font-size: 12pt;
    vertical-align: middle;
  }

  .legal {
    width: 75%;
    display: inline-block;
  }

  #contact-area {
    margin-top: -80px; /* Needed to have the divider above slightly overlap it */
    padding: 70px 0 20px 0;
  }
</style>