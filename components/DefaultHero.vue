<template>
  <div class="hero">
    <p class="hero-welcome">
      <slot/>
    </p>
    <h1 class="hero-title">Pfadi Schenkenberg</h1>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  padding-inline: $default-inline-padding;
  width: 100dvw;
  height: 38rem;

  z-index: -1;
  background-image: url("assets/img/fotos/hero.jpg");
  background-position: center;
  background-size: cover;

  .hero-welcome {
    transform: translate(20%);
    font-family: "Patrick Hand", sans-serif;
    font-size: 4rem;
    line-height: 4rem;

    color: $tan-hide-400;
  }

  .hero-title {
    font-family: "Istok Web", sans-serif;
    font-weight: bold;
    font-size: 5rem;
    line-height: 5rem;

    color: $burnt-sienna-400;
  }
}
</style>