<template>
  <NuxtLink :to="props.to" class="fancy-link">
    <slot/>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    required: true
  }
});
</script>
<style lang="scss" scoped>
@use "assets/scss/includes" as var;
.fancy-link {
  display: inline-block;
  position: relative;

  font-family: "Patrick Hand", sans-serif;
  font-size: 2.5rem;
  line-height: 2.5rem;

  text-decoration: none;
  color: var.$text-dark;
  cursor: pointer;

  &:hover {
    color : var.$text-dark;
  }

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: calc(100% - 0.3rem);
    height: 1.4rem;
    left: 0.8rem;
    top: 1.4rem;
    z-index: -1;

    background-color : var.$tan-hide-400;
    transition: top 0.15s ease, left 0.15s ease;

  }

  &:hover::after {
    left: 0.4rem;
    top: 1.2rem;
  }
   &:active::after {
    left: 0;
    top: 1rem;
  }
}

@media screen and (max-width : var.$screen-size-small){
  .fancy-link {
    font-size: 2rem;
    line-height: 2rem;

    &::after {
      width: calc(100% - 0.4rem);
      height: 1.1rem;
      left: 0.8rem;
      top: 1.1rem;
    }

    &:hover::after {
      left: 0.24rem;
      top: 0.7rem;
    }
    &:active::after {
      left: 0;
      top: 0.6rem;
    }
  }
}
</style>
