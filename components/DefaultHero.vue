<template>
  <div class="hero">
    <div class="hero-text">
      <p class="hero-welcome">
        <slot />
      </p>
      <h1 class="hero-title">Pfadi Schenkenberg</h1>
    </div>
    <div :class="{'hero-wave': props.wave}"></div>
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
@use "assets/scss/includes" as var;

.hero {

  z-index: -1;
  background-image: url("public/img/hero.jpg");
  background-position: center;
  @include var.cb-background-size(cover);

  .hero-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: min(1.2rem, 2vw);

    padding-inline: var.$small-inline-padding;

    padding-top: 8rem;
    width: 100%;
    height: 47.5vw;

    .hero-welcome {
      transform: translate(20%);
      font-family: "Patrick Hand", sans-serif;
      font-size: min(4rem, 6vw);
      line-height: min(4rem, 6vw);
      margin: 0;

      color: var.$tan-hide-400;
      text-shadow: var.$asparagus-950 0 0 10px;
    }

    .hero-title {
      font-family: "Istok Web", sans-serif;
      font-weight: bold;
      font-size: min(5rem, 7.5vw);
      line-height: min(5rem, 7.5vw);

      color: var.$burnt-sienna-400;
      text-shadow: var.$asparagus-950 0 0 10px;
    }
  }

  .hero-wave {
    width: 100%;
    height: 1.5rem;
    background-image: url("assets/img/separator-white.svg");
    background-position-x: 10%;
    background-position-y: top;
    background-repeat: no-repeat;
    @include var.cb-background-size(cover);
  }

}

@media screen and (min-width: var.$screen-size-small) {
  .hero {
    .hero-wave {
      background-position-x: center;
    }
  }
}

@media screen and (min-width: var.$screen-size-medium) {
  .hero {
    .hero-text {
      padding-top: 0;
      height: 38rem;
    }

    .hero-wave {
      height: 2.6rem;
    }
  }
}
</style>