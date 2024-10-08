<template>
  <a :href="props.src" download external class="file">
    {{ fileName }}
  </a>
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
a {
  display: flex;
  align-items: center;
}
a::before {
  content: "";
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  display: inline-block;
  background-image: url("assets/img/file-icon.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>