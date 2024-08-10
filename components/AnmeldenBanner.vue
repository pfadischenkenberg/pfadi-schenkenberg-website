<template>
  <div class="anmelden-banner">
    <p>Lust, Pfadiluft zu schnuppern?</p>
    <FancyLink to="/administratives#schnuppern">Zur Anmeldung</FancyLink>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.anmelden-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  position: relative;
  padding-block: 2rem;
  width: 100dvw;

  background-color: $asparagus-300;
  z-index: 1;

  p {
    font-family: "Patrick Hand", sans-serif;
    font-size: 3.2rem;
    line-height: 3.2rem;
    margin: 0;
  }
}

.anmelden-banner::before {
  content: "";
  position: absolute;
  top: -2.4rem;
  width: 100%;
  height: 2.5rem;
  background-image: url("assets/img/separator-green.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 101%;
  z-index: 0;
}

.anmelden-banner::after {
  content: "";
  position: absolute;
  bottom: -2.4rem;
  width: 100%;
  height: 2.5rem;
  transform: rotate(180deg);
  background-image: url("assets/img/separator-green-centered.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: 101%;
  z-index: 0;
}

</style>