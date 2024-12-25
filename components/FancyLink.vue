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
@import "assets/scss/variables";

.fancy-link {
  display: inline-block;
  position: relative;

  font-family: "Patrick Hand", sans-serif;
  font-size: 2.5rem;
  line-height: 2.5rem;

  text-decoration: none;
  color: $text-dark;
  cursor: pointer;

  &:hover {
    color: $text-dark;
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

    background-color: $tan-hide-400;
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

@media screen and (max-width: $screen-size-small){
  .fancy-link {
    font-size: 1.5rem;
    line-height: 1.5rem;

    &::after {
      width: calc(100% - 0.18rem);
      height: 0.8rem;
      left: 0.5rem;
      top: 0.8rem;
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
