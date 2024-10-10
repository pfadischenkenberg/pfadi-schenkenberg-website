<template>
  <footer>
    <div class="footer-content">
      <p class="footer-copyright">&copy; Pfadi Schenkenberg {{ year }}</p>
      <img src="assets/img/logos/schenkenberg-wappen-braun.svg" alt="Wappen der Pfadi Schenkenberg in Braun">
      <div class="footer-links">
        <nav>
          <ul>
            <li>
              <NuxtLink to="/">Startseite</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/administratives#kontakte">Kontakt</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/impressum">Impressum</NuxtLink>
            </li>
          </ul>
        </nav>
        <NuxtLink class="footer-link-instagram" to="https://www.instagram.com/pfadi_schenkenberg/" target="_blank" title="Link zum Schenkenberg Instagram Account"/>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.footer-content {
  padding-inline: $default-inline-padding;
  background-color: $tan-hide-300;
  height: 7rem;
  padding-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    float: left;
    font-weight: 500;
    margin: 0;
  }

  img {
    position: absolute;
    left: 50dvw;
    transform: translate(-50%);
    height: 4rem;
  }

  .footer-links {
    float: right;

    display: flex;
    gap: 2rem;
    align-items: center;

    ul {
      display: flex;
      align-items: end;
      justify-content: center;
      gap: 2rem;

      li {
        a {
          font-size: 1.5rem;
          color: $text-dark;
          text-decoration: none;
          font-weight: 500;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .footer-link-instagram {
      width: 2rem;
      height: 2rem;

      display: block;

      background-image: url("assets/img/logos/instagram-logo.svg");
    }
  }
}

footer::before {
  content: "";
  width: 100%;
  height: 3rem;
  position: relative;
  bottom: -0.1rem;

  display: block;

  background-image: url("assets/img/separator-orange.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  z-index: 1;
  
  @media screen and (max-width: $screen-size-small) {
    height: 1.5rem;
  }
}
</style>