<template>
  <div class="accordion">
    <button class="accordion-title" @click="togglePanel">
      <h2>{{ title }}</h2>
      <img :class="{ open: isOpen }" src="assets/img/arrow-extend.svg" alt="Pfeil">
    </button>
    <div ref="content" :style="{ maxHeight: contentHeight }" class="content">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
});

const isOpen = ref(false);
const contentHeight = ref("0px");
const content = ref(null);

const togglePanel = () => {
  isOpen.value = !isOpen.value;
  adjustContentHeight();
};

const adjustContentHeight = () => {
  nextTick(() => {
    contentHeight.value = isOpen.value ? `${content.value.scrollHeight}px` : "0px";
  });
};

onMounted(() => {
  contentHeight.value = isOpen.value ? `${content.value.scrollHeight}px` : "0px";
});
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.accordion {
  margin-bottom: 1rem;

  overflow: hidden;

  .accordion-title {
    padding: 0;
    width: 100%;
    border: none;
    margin-bottom: 0.5rem;

    display: flex;
    justify-content: center;

    background-color: transparent;
    cursor: pointer;
    outline: none;

    h2 {
      display: inline-block;
    }

    img {
      transition: transform 0.2s ease-in-out;
      margin: 0 0 .4rem 1rem;

      &.open {
        transform: rotate(180deg);
      }
    }
  }

  .content {
    overflow: hidden;
    transition: max-height 0.2s ease-in-out;
  }
}
</style>
