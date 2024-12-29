<template>
  <div class="hamburger" :class="{ open: isOpen }" @click="toggleMenu">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';

const props = defineProps({
  expanded: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['update:expanded']);

const isOpen = ref(props.expanded);

watch(() => props.expanded, (newExpanded) => {
  isOpen.value = newExpanded;
});

function toggleMenu() {
  isOpen.value = !isOpen.value;
  emit('update:expanded', isOpen.value);
}
</script>

<style lang="scss" scoped>
@use "assets/scss/includes" as var;

.hamburger {
  $spacing: 0.6rem;
  $line-width: 3.5px;

  cursor: pointer;
  position: relative;
  display: inline-block;
  height: calc(2 * $spacing + $line-width);
  width: 2rem;
  margin: 0;
  padding: 0;

  span {
    display: block;
    position: absolute;
    height : $line-width;
    width: 100%;
    background : var.$text-dark;
    border-radius: calc($line-width / 2);
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top : $spacing;
    }

    &:nth-child(4) {
      top: calc($spacing * 2);
    }
  }

  &.open {
    span:nth-child(1) {
      top : $spacing;
      width: 0%;
      left: 50%;
    }

    span:nth-child(2) {
      transform: rotate(45deg);
    }

    span:nth-child(3) {
      transform: rotate(-45deg);
    }

    span:nth-child(4) {
      top : $spacing;
      width: 0%;
      left: 50%;
    }
  }
}
</style>
