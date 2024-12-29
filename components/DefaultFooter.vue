<template>
  <footer>
    <div class="footer-content">
      <p class="footer-copyright">&copy; Pfadi Schenkenberg {{ year }}</p>
      <NuxtLink class="footer-logo" to="/" title="Wappen der Pfadi Schenkenberg als Link zur Startseite" />
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
        <NuxtLink class="footer-link-instagram" to="https://www.instagram.com/pfadi_schenkenberg/" target="_blank"
                  title="Link zum Schenkenberg Instagram Account" />
      </div>
      <NuxtLink class="footer-link-instagram-mobile" to="https://www.instagram.com/pfadi_schenkenberg/" target="_blank"
                title="Link zum Schenkenberg Instagram Account" />
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
@use "assets/scss/includes" as var;

.footer-content {
  padding-inline: var.$default-inline-padding;
  background-color: var.$tan-hide-300;
  height: 7rem;
  padding-bottom: var.$small-inline-padding;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.5rem;

  .footer-copyright {
    margin: 0;
    font-size: inherit;
    line-height: 1.2rem;
    text-align: center;
  }

  .footer-logo {
    background-image: url("assets/img/logos/schenkenberg-wappen-braun.svg");
    background-position: center;
    @include var.cb-background-size(contain);
    background-repeat: no-repeat;

    position: absolute;
    left: 50%;
    transform: translate(-50%);
    height: 4rem;
    aspect-ratio: 55/69;
  }

  .footer-links {
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
          font-size: inherit;
          color: var.$text-dark;
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

  .footer-link-instagram-mobile {
    display: none;
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
  @include var.cb-background-size(cover);
  z-index: 1;

  @media screen and (max-width: var.$screen-size-small) {
    height: 1.5rem;
  }
}

@media screen and (max-width: 1300px) {
  .footer-content {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
}

@media screen and (max-width: var.$screen-size-medium) {
  .footer-content {
    padding-inline: var.$medium-inline-padding;
  }
}

@media screen and (max-width: 1000px) {
  .footer-content {
    height: fit-content;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 0;


    .footer-logo {
      position: initial;
      order: 1;
      transform: translate(0);

      margin-bottom: 1rem;
    }

    .footer-links {
      order: 2;

      .footer-link-instagram {
        display: none;
      }
    }

    .footer-copyright {
      order: 3;
    }

    .footer-link-instagram-mobile {
      display: block;
      width: 2rem;
      height: 2rem;
      background-image: url("assets/img/logos/instagram-logo.svg");
      @include var.cb-background-size(cover);

      position: absolute;
      bottom: var.$small-inline-padding;
      right: var.$small-inline-padding;
    }
  }
}

@media screen and (max-width: var.$screen-size-small) {

  .footer-content {
    gap: 2rem;

    .footer-logo {
      margin: 0;
    }

    .footer-links {
      order: 2;

      ul {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 0;
      }
    }
  }
}
</style>