<template>
  <div
      class="nav-dropdown"
      v-on:mouseover="openDropdown()"
      v-on:mouseleave="closeDropdown()"
  >
    <a v-if="!!props.href" :href="props.href">
      {{ props.text }}
    </a>
    <span v-else>
    {{ props.text }}
  </span>
    <div class="dropdown-wrapper" :class="{expanded: expanded}">
      <ul class="dropdown" :class="{expanded: expanded}">
        <slot/>
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
@use "assets/scss/variables";

.nav-dropdown {

  position: relative;
  cursor: pointer;

  & > *:is(a, span) {
    text-decoration: none;
    color : variables.$text-dark;

    &:hover {
      text-decoration: underline;
    }
  }

  .dropdown-wrapper {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;

    padding-top: 0.5rem;
    min-width: 100%;


    @media screen and (max-width : variables.$screen-size-small) {
      min-width: 50%;
    }

    .dropdown {
      padding: 0.5rem 0.8rem;
      white-space: nowrap;

      list-style-type: none;
      border-radius: 4px;
      background-color: rgba(variables.$tan-hide-100, 0.5);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);

      & > * {
        margin-block: 0.2rem;
      }
    }
  }

  .expanded {
    display: block;
  }
}
</style>,