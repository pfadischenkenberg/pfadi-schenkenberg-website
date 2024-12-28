<template>
  <div class="hero">
    <div class="hero-text">
      <p class="hero-welcome">
        <slot />
      </p>
      <h1 class="hero-title">Pfadi Schenkenberg</h1>
    </div>
    <img v-if="props.wave == true" src="assets/img/separator-white.svg" alt="Separator" class="hero-wave">
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
@use "assets/scss/variables";

.hero {
  .hero-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: min(1.2rem, 2dvw);

    padding-inline: variables.$small-inline-padding;
    width: 100dvw;
    height: 38rem;

    z-index: -1;
    background-image: url("public/img/hero.jpg");
    background-position: center;
    background-size: cover;

    .hero-welcome {
      transform: translate(20%);
      font-family: "Patrick Hand", sans-serif;
      font-size: min(4rem, 6dvw);
      line-height: min(4rem, 6dvw);
      margin: 0;

      color: variables.$tan-hide-400;
      text-shadow: variables.$asparagus-950 0 0 10px;
    }

    .hero-title {
      font-family: "Istok Web", sans-serif;
      font-weight: bold;
      font-size: min(5rem, 7.5dvw);
      line-height: min(5rem, 7.5dvw);

      color: variables.$burnt-sienna-400;
      text-shadow: variables.$asparagus-950 0 0 10px;
    }
  }

  .hero-wave {
    position: relative;
    width: 100dvw;
    bottom: 0;
    translate: 0 -99%;
    object-fit: fill;
  }

}

@media screen and (max-width: variables.$screen-size-medium) {
  .hero {
    .hero-text {
      padding-top: 8rem;
      height: 47.5dvw
    }
  }
}
</style>