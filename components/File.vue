<template>
  <NuxtLink :to="props.src" download external>
    {{ fileName }}
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true
  }
});

const fileName = props.src.split(/[/;\\]+/).pop();

</script>

<style lang="scss" scoped>
a::before {
  content: "";
  display: inline-block;

}
</style>