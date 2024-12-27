<template>
  <figure class="polaroid-photo">
    <NuxtImg :src="props.src" :alt="props.alt" :placeholder="[16, 9]"/>
    <figcaption>
      <slot />
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
    margin-block: 0.5rem;

    font-family: "Patrick Hand", sans-serif;
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
  }

  @media screen and (max-width: $screen-size-small) {
    padding: 1.5rem 1.5rem 0.5rem;
    gap: 0.2rem;
    figcaption {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
}
</style>