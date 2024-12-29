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
@use "assets/scss/includes" as var;
header {
  position: fixed;
  z-index: 9999;
  padding-inline: var.$default-inline-padding;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: rgba(var.$tan-hide-100, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  .se-logo-link {
    margin-block: 1rem;
  }

  nav {
    line-height: 0;
    ul {
      display: flex;

      li {
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-weight: 600;
        white-space: nowrap;

        &:hover {
          background-color: rgba(var.$tan-hide-100, 0.2);
        }

        a, .nav-dropdown {
          display: block;
          padding-inline: 1rem;
          line-height: 6rem;
          text-decoration: none;
          color: var.$text-dark;

          &:hover {
            background-color: rgba(var.$tan-hide-50, 0.2);
          }
        }
      }
    }

    .hamburger {
      display: none;
    }
  }
}

@media screen and (max-width: var.$screen-size-medium) {
  header {
    padding-inline: var.$medium-inline-padding;

    nav {
      ul {
        margin-inline: 0;
        visibility: hidden;
        position: absolute;
        top: 3.5rem;
        left: 0;
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        background-color: rgba(var.$tan-hide-100, 0.5);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        opacity: 0;

        transition: visibility 0s, opacity 0.25s ease-in-out;

        li {
          a, .nav-dropdown {
            line-height: 3rem;
            text-align: center;
          }
        }
      }

      .expanded {
        visibility: visible;
        opacity: 1;
        padding-bottom: 1rem;
        margin-top: 2rem;
        background-color: rgba(var.$tan-hide-50, 0.8);
      }

      .hamburger {
        display: inline-block;
      }
    }
  }
}

@media screen and (max-width: var.$screen-size-small) {
  header {
    padding-inline: var.$small-inline-padding;
  }
}
</style>