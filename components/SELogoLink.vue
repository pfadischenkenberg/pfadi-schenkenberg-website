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
@use "assets/scss/includes" as var;
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
      color: var.$text-dark;
      line-height: 1.6rem;
    margin: 0;
    }

    @media screen and (max-width: var.$screen-size-small) {
      gap: 0.5rem;

      img {
        height: 2.5rem;
      }
      p {
        font-size: 1rem;
        line-height: 1rem;
      }
    }
  }

}
</style>