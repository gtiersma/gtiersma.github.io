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
  }

  .icon {
    padding-right: 10px;
    font-size: 12pt;
    vertical-align: middle;
  }

  a {
    cursor: pointer;
    font-size: 10pt;
  }

  #contact-area {
    margin-top: -80px; /* Needed to have the divider above slightly overlap it */
    padding: 70px 0 20px 0;
  }
</style>