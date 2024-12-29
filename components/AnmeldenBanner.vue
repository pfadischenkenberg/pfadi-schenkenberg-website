<template>
  <div class="anmelden-banner">
    <p>Lust, Pfadiluft zu schnuppern?</p>
    <FancyLink to="/administratives#schnuppern">Zur Anmeldung</FancyLink>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@use "assets/scss/includes" as var;
.anmelden-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;

  position: relative;
  padding-block: 1rem;
  width: 100%;

  background-color: var.$asparagus-300;
  z-index: 1;

  text-align: center;

  p {
    font-family: "Patrick Hand", sans-serif;
    font-size: 1.9rem;
    line-height: 1.9rem;
    margin: 0;
  }

  &::before, &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1.5rem;
    background-image: url("assets/img/separator-green.svg");
    background-repeat: repeat-x;
    @include var.cb-background-size(cover);
    background-position-x: 10%;
    background-position-y: top;
    z-index: 0;
  }

  &::before {
    top: -1.5rem;
  }

  &::after {
    rotate: 180deg;
    bottom: -1.5rem;
  }

  @media screen and (min-width: var.$screen-size-small) {
    gap: 1.5rem;

    p {
      font-size: 3.2rem;
      line-height: 3.2rem;
    }

    &::before, &::after {
      background-position-x: center;
    }
  }

  @media screen and (min-width: var.$screen-size-medium) {
    &::before {
      height: 2.5rem;
      top: -2.5rem;
    }

    &::after {
      height: 2.5rem;
      bottom: -2.5rem;
    }
  }
}


</style>