<template>
  <div class="error">
    <h1>{{ error.statusCode }}</h1>
    <p>Leider ist ein Fehler vorgefallen: <br><code>"{{ error.message }}"</code></p>

    <FancyLink to="" @click="handleError">Zur Startseite</FancyLink>
  </div>
</template>

<script setup lang="ts">
  import type { NuxtError } from "#app";

  const { error } = defineProps<{
    error: NuxtError
  }>();

  const handleError = () => clearError({ redirect: "/" });
</script>


<style lang="scss" scoped>
.error {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;

  * {
    margin: 0;
  }
}
</style>
