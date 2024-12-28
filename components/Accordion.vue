<template>
  <div class="accordion">
    <button class="accordion-title" @click="toggleAccordion" :title="title">
      <h2>{{ title }}</h2>
      <img :class="{ open: isOpen }" src="assets/img/arrow-extend.svg" alt="Pfeil">
    </button>
    <div ref="content" :style="{ maxHeight: contentHeight }" class="content">
      <slot v-if="isOpen" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean,
    required: false,
    default: false
  }
});

const isOpen = ref(props.isOpen);
const contentHeight = ref("0px"); // css max-height of content
const content = ref(null);


onMounted(adjustContentHeight);

function toggleAccordion() {
  isOpen.value = !isOpen.value;
  adjustContentHeight();
}

// Sets the max-height attribute of the content to the respective height
function adjustContentHeight() {
  nextTick(() => {
    if (isOpen.value) {
      contentHeight.value = `${content.value.scrollHeight}px`;
    } else {
      contentHeight.value = "0px";
    }
  });
}

</script>

<style lang="scss" scoped>
@use "assets/scss/variables";

.accordion {
  margin-bottom: 2rem;

  overflow: hidden;

  .accordion-title {
    padding: 0;
    width: 100%;
    border: none;
    margin-bottom: 0.5rem;

    display: flex;
    align-items: center;

    text-align: left;

    background-color: transparent;
    cursor: pointer;

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
