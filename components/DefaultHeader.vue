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
          <NavDropdownElement text="Tipps & Tricks">
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
import { ref, watch } from 'vue';
import { useFixedHeader } from 'vue-use-fixed-header';
import { useRoute } from 'vue-router';

// For mobile:
let expanded = ref(false);

// Get current route
const route = useRoute();

// Close menu when route changes
watch(() => route.path, () => {
  expanded.value = false;
});

watch(() => expanded.value, () => {
  console.log("expanded: " + expanded.value);
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
        margin: 0;
        padding: 0;
        visibility: hidden;
        position: fixed;
        top: 8rem;
        left: 0;
        right: 0;
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 0;

        background-color: rgba(var.$tan-hide-100, 0.95);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        opacity: 0;

        transition: visibility 0s 0.25s, opacity 0.25s ease-in-out;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

        li {
          border-bottom: 1px solid rgba(var.$tan-hide-300, 0.3);
          
          &:last-child {
            border-bottom: none;
          }
          
          a, .nav-dropdown {
            line-height: 4.5rem;
            text-align: center;
            padding: 0 2rem;
          }
        }
      }

      .expanded {
        visibility: visible;
        opacity: 1;
        transition: visibility 0s, opacity 0.25s ease-in-out;
        padding-bottom: 1rem;
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

@media screen and (max-width: var.$screen-size-small) {
  header {
    padding-inline: var.$small-inline-padding;
  }
}
</style>