<template>
  <div
    class="nav-dropdown"
    tabindex="0"
    v-on:mouseover="openDropdown()"
    v-on:mouseleave="closeDropdown()"
    v-on:click="openDropdown()"
    v-on:focus="openDropdown()"
  >
    <a v-if="!!props.href" :href="props.href">
      {{ props.text }}
    </a>
    <span v-else>
    {{ props.text }}
  </span>
    <div class="dropdown-wrapper" :class="{expanded: expanded}">
      <ul class="dropdown" :class="{expanded: expanded}">
        <slot />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  href: String,
  text: {
    type: String,
    required: true
  }
});

let expanded = ref(false);

function openDropdown() {
  expanded.value = true;
}

function closeDropdown() {
  expanded.value = false;
}
</script>

<style lang="scss" scoped>
@use "assets/scss/includes" as var;

.nav-dropdown {

  width: 100%;

  position: relative;
  cursor: pointer;

  background-color: transparent;
  border: none;
  font: inherit;

  & > *:is(a, span) {
    text-decoration: none;
    color: var.$text-dark;
  }

  .dropdown-wrapper {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;


    @media screen and (max-width: var.$screen-size-medium) {
      position: static;
      width: 100%;
    }

    @media screen and (max-width: var.$screen-size-small) {
      min-width: 50%;
    }

    .dropdown {
      white-space: nowrap;

      list-style-type: none;
      background-color: rgba(var.$tan-hide-50, 0.2);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);

      @media screen and (max-width: var.$screen-size-medium) {
        background-color: rgba(var.$tan-hide-50, 0.8);
        padding: 0.5rem 0;
      }

      & > * > * {
        color: var.$burnt-sienna-700;
        line-height: 3rem;
        text-align: center;
      }
    }
  }

  .expanded {
    display: block;
  }
}
</style>,