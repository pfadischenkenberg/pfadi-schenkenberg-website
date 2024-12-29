<template>
  <div>

    <DefaultHero>Impressum der</DefaultHero>
    <main class="grid-container">
      <h1>Impressum</h1>
      <section class="grid-container">
        <h2>Redaktion</h2>

        <p>Pfadi Schenkenberg, Bezirk Zytröseli, Basel</p>
      </section>

      <section class="grid-container">
        <h2>Design und Programmierung</h2>

        <p>Das Design und die Entwicklung entstanden durch
          <NuxtLink to="https://github.com/timlandolt">Tim Landolt v/o Balu</NuxtLink>
          und in enger Zusammenarbeit
          mit den Mitleiterinnen:
        </p>
        <ul>
          <li>Jara Senn v/o Mononoke</li>
          <li>Solenne Saltel v/o Paloma</li>
          <li>Zora Landolt v/o Guarda</li>
        </ul>
        <p>Auch der Rest des Leitungsteams hat wichtige Ideen, Texte, und Anmerkungen beigetragen <3.</p>
      </section>

      <section class="grid-container">
        <h2>Lizenzen</h2>

        <p>Die verwendeten Icons stammen in farblich angepasster Form u.a. von:</p>
        <ul>
          <li><a href="https://dazzleui.gumroad.com/l/dazzleiconsfree?ref=svgrepo.com" target="_blank">Dazzle Ui</a>
            unter der CC Attribution Lizenz via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a>.
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const seo = {
  title: "Impressum | Pfadi Schenkenberg",
  description: "Auf dieser Seite findest du rechtliche Informationen zur Website sowie Danksagungen."
};

useSeoMeta({
  title: seo.title,
  ogTitle: seo.title,
  description: seo.description,
  ogDescription: seo.description,
  ogImage: "/img/gruppenfoto-abteilung.jpg",
  twitterCard: "summary_large_image"
});
</script>

<style lang="scss" scoped>
main {
  h1 {
    grid-column: 1/13;
    text-align: center;
  }

  section {
    grid-column: 1/13;

    &:not(:first-of-type) {
      margin-top: 4rem;
    }


    h2, p, ul {
      grid-column: 1/9;
      list-style: initial;
    }
  }
}
</style>