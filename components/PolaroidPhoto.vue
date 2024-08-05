<template>
  <figure class="polaroid-photo">
    <NuxtImg :src="props.src" :alt="props.alt" placeholder/>
    <figcaption>
      <slot/>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: false
  }
});
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.polaroid-photo {
  padding: 2rem 2rem 1rem;
  height: max-content;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  background-color: $burnt-sienna-100;

  img {
    width: 100%;
  }

  figcaption {
    font-family: "Patrick Hand", sans-serif;
    font-size: 2rem;
  }
}
</style>