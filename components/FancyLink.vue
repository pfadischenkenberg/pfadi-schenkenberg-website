<template>
  <a :href="props.to" class="fancy-link">
    <slot/>
  </a>
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
  }
}
</style>
