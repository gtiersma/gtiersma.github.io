<template>
  <div>
    <h5>Contact</h5>

    <ul>
      <li>
        <fa-icon class="icon" icon="fa-envelope" href="mailto:gtiersma@somethingmail.com"/>
        <label href="mailto:gtiersma@somethingmail.com">Email</label>
      </li>

      <li>
        <fa-icon class="icon" icon="fa-phone" href="tel:+5039912686"/>
        <label href="tel:+5039912686">Call</label>
      </li>

      <li>
        <fa-icon class="icon" icon="fa-brands fa-linkedin-in" href="linkedin.com"/>
        <label href="linkedin.com">LinkedIn</label>
      </li>

      <li>
        <fa-icon class="icon" icon="fa-brands fa-github" href="https://github.com/gtiersma"/>
        <label href="https://github.com/gtiersma">Git Hub</label>
      </li>
    </ul>
  </div>
</template>
  
<script setup lang="ts">
</script>
  
<style scoped>
  h5 {
    padding: 0 0 5px 30px;
    font-weight: bold;
  }

  ul {
    list-style-type: none;
  }

  label {
    padding-left: 10px;
  }

  label, .icon {
    cursor: pointer;
  }
</style>