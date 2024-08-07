<template>
  <div class="hero">
    <div class="hero-text">
      <p class="hero-welcome">
        <slot />
      </p>
      <h1 class="hero-title">Pfadi Schenkenberg</h1>
    </div>
    <div v-if="props.wave == true" class="hero-wave"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  wave: {
    default: true
  }
});
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.hero {
  .hero-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    padding-inline: $default-inline-padding;
    width: 100dvw;
    height: 38rem;

    z-index: -1;
    background-image: url("public/img/hero.jpg");
    background-position: center;
    background-size: cover;

    .hero-welcome {
      transform: translate(20%);
      font-family: "Patrick Hand", sans-serif;
      font-size: 4rem;
      line-height: 4rem;
      margin: 0;

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

  .hero-wave {
    position: relative;
    width: 100dvw;
    height: 2.5rem;
    top: -2.4rem;
    background-image: url("assets/img/separator-white.svg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: 101%;
    z-index: 2;
  }
}
</style>