<template>
  <div>
    <header>
      <SELogoLink/>
      <nav>
        <ul>
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
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">

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
  }
}
</style>