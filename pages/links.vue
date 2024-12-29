<template>
  <div>
    <DefaultHero>Nützliche Links zur</DefaultHero>
    <main class="grid-container">
      <h1>Links rund um Pfadi</h1>
      <div class="links-wrapper">
        <LinkContainer title="Hajk"
                       text="Onlineshop für Outdoor- und Pfadiprodukte"
                       href="https://www.hajk.ch/de/"
                       link-text="hajk.ch" />
        <LinkContainer title="Pfadilädeli"
                       text="Für alles, was man in der Pfadi so braucht"
                       href="https://pfadi-region-basel.ch/projekte/pfadilaedeli/"
                       link-text="pfadi-region-basel.ch/pfadiladen" />
        <LinkContainer title="Pfadi Region Basel"
                       text="Alles, was man über den Kantonalverband wissen muss"
                       href="https://www.pfadi-region-basel.ch"
                       link-text="pfadi-region-basel.ch" />
        <LinkContainer title="Pfadibewegung Schweiz"
                       text="Der Dachverband der Schweizer Pfadiabteilungen"
                       href="https://pfadi.swiss"
                       link-text="pfadi.swiss" />
        <LinkContainer title="XCout"
                       text="Die Radiosendung der Pfadi Region Basel"
                       href="https://pfadi-region-basel.ch/projekte/xcout/"
                       link-text="pfadi-region-basel.ch/xcout" />
        <LinkContainer title="Geschichte der Pfadi"
                       text="Die ganze Geschichte der Schweizer Pfadibewegung und mehr"
                       href="https://pfadi.swiss/de/das-ist-pfadi/geschichte-der-pfadi/"
                       link-text="Geschichte der Pfadi" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">

const seo = {
  title: "Links | Pfadi Schenkenberg",
  description: "Die praktischsten Links rund um den Pfadialltag findest du hier! Alles von der richtigen Pfadiausrüstung bis zur Geschichte der Pfadi."
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
@use "assets/scss/includes" as var;

main {
  h1 {
    grid-column: 1/13;
    text-align: center;
  }

  .links-wrapper {
    grid-column: 1/13;

    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }
}

@media screen and (min-width: var.$screen-size-medium) {
  .links-wrapper {
    gap: 2rem;
  }
}
</style>