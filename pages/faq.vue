<template>
  <div>
    <DefaultHero>Mögliche Fragen zur</DefaultHero>
    <main class="grid-container">
      <Accordion title="HElooo0">
        Hello world<br>
        Hello world<br>
        Hello world<br>
        Hello world<br>
        Hello world<br>
        Hello world<br>
        Hello world<br>
        Hello world<br>
        Hello world<br>
        Hello world<br>
      </Accordion>
    </main>
  </div>
</template>

<script setup lang="ts">

import Accordion from "~/components/Accordion.vue";
</script>

<style lang="scss" scoped>
main {
  .accordion {
    grid-column: 1/13;
  }
}
</style>