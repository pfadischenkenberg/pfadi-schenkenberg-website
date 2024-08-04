<template>
  <div class="app-header">
    <header>
      <SELogoLink/>
      <nav>
        <ul :class="{expanded: expanded}">
          <li class="first">
            <RouterLink to="/">Startseite</RouterLink>
          </li>
          <li>
            <RouterLink to="/">Stufen</RouterLink>
          </li>
          <li>
            <RouterLink to="/">Administratives</RouterLink>
          </li>
          <li>
            <NavDropdownElement text="Tips & Tricks">
              <li>
                <RouterLink to="/links">Links</RouterLink>
              </li>
              <li>
                <RouterLink to="/faq">FAQs</RouterLink>
              </li>
            </NavDropdownElement>
          </li>
        </ul>
        <HamburgerButton v-model:expanded="expanded"/>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
import {watch} from "vue";

let expanded = ref(false);

watch(() => expanded, () => {
  console.log("expanded: " + expanded);
});
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

        font-size: 1.2rem;
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

@media screen and (max-width: $screen-size-small) {
  header {
    padding: 0.8rem $small-inline-padding;

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
</style>