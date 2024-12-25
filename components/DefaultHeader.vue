<template>
  <header ref="defaultHeaderRef" :style="styles">
    <SELogoLink />
    <nav>
      <ul :class="{expanded: expanded}">
        <li class="first">
          <NuxtLink to="/">Startseite</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/stufen">Stufen</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/administratives">Administratives</NuxtLink>
        </li>
        <li>
          <NavDropdownElement text="Tips & Tricks">
            <li>
              <NuxtLink to="/links">Links</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq">FAQs</NuxtLink>
            </li>
          </NavDropdownElement>
        </li>
      </ul>
      <HamburgerButton v-model:expanded="expanded" />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { ref } from 'vue';
import { useFixedHeader } from 'vue-use-fixed-header';

// For mobile:
let expanded = ref(false);

watch(() => expanded, () => {
  console.log("expanded: " + expanded);
});


// "Smart" fixed header:
const defaultHeaderRef = ref(null);
const { styles } = useFixedHeader(defaultHeaderRef);

</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

header {
  position: fixed;
  z-index: 9999;
  padding: 1rem $default-inline-padding;
  width: 100dvw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: rgba($tan-hide-100, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  nav {
    ul {
      display: flex;
      gap: 2rem;

      li {

        font-size: 1.5rem;
        line-height: 1.5rem;
        font-weight: 600;
        white-space: nowrap;

        &:first-child {
          margin-left: auto;
        }

        a {
          text-decoration: none;
          color: $text-dark;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .hamburger {
      display: none;
    }
  }
}

@media screen and (max-width: $screen-size-medium) {
  header {
    padding-inline: $medium-inline-padding;

    nav {
      ul {
        visibility: hidden;
        position: absolute;
        top: 3.5rem;
        right: 0;
        padding: 1rem $small-inline-padding;
        border-radius: 5px;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        background-color: rgba($tan-hide-100, 0.5);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        opacity: 0;

        transition: visibility 0s, opacity 0.25s ease-in-out;


        & > * {
          width: 100%;
          text-align: right;
        }
      }

      .expanded {
        visibility: visible;
        opacity: 1;
      }

      .hamburger {
        display: inline-block;
      }
    }
  }
}

@media screen and (max-width: $screen-size-small) {
  header {
    padding: 0.8rem $small-inline-padding;
  }
}
</style>