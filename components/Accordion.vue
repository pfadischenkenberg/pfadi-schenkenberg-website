<template>
  <div class="accordion">
    <button class="accordion-title" @click="togglePanel">
      <h2>{{ title }}</h2>
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
  overflow: hidden;

  .accordion-title {
    width: fit-content;
    background-color: transparent;
    border: none;
    padding: 0;
    text-align: left;
    cursor: pointer;
    outline: none;

    h2 {
      transition: color 0.2s ease-out;

      &:hover {
        color: $burnt-sienna-400;
      }
    }
  }

  .content {
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }
}
</style>
