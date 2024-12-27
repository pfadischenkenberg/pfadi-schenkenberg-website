<template>
  <div class="link-container">
    <h3>{{ props.title }}</h3>
    <p>{{ props.text }}</p>
    <NuxtLink :href="props.href" target="_blank">{{ props.linkText }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    required: true
  }
});

</script>

<style lang="scss" scoped>
@use "assets/scss/variables";

.link-container {
  max-width: 25rem;

  h3 {
    font-size: 2rem;
    color : variables.$burnt-sienna-400;
    font-weight: 600;
  }

  p {
    font-weight: 600;
    margin: 1rem 0 0.5rem;
  }
}
</style>