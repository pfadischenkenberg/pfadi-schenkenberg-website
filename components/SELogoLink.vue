<template>
  <div class="se-logo-link">
    <RouterLink to="/" class="se-logo-router-link">
      <img src="assets/img/logos/schenkenberg-wappen-braun.svg" alt="Pfadi Schenkenberg Wappen in Braun">
      <p>Pfadi<br>
        Schenkenberg</p>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.se-logo-link {

  grid-column: 1/3;

  .se-logo-router-link {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    text-decoration: none;

    img {
      height: 4rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: bold;
      color: $text-dark;
      line-height: 1.6rem;
    }
  }
}
</style>