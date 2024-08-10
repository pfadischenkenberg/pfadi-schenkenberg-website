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
                       href="https://www.pfadi-region-basel.ch/pfadiladen"
                       link-text="pfadi-region-basel.ch/pfadiladen" />
        <LinkContainer title="Pfadi Region Basel"
                       text="Alles, was man über den Kantonalverband wissen muss"
                       href="https://www.pfadi-region-basel.ch"
                       link-text="pfadi-region-basel.ch" />
        <LinkContainer title="XCout"
                       text="Die Radiosendung der Pfadi Region Basel"
                       href="https://www.pfadi-region-basel.ch/xcout"
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
useSeoMeta({
  title: "Links | Pfadi Schenkenberg",
  ogTitle: "Links | Pfadi Schenkenberg",
  description: "Wenn auch du auf der Suche nach funkelnden Augen, Abenteuer an der frischen Luft, Freundschaften, die sich wie die zweite Familie anfühlen und eine Menge Spass bist, dann bist du bei uns genau richtig!",
  ogDescription: "Wenn auch du auf der Suche nach funkelnden Augen, Abenteuer an der frischen Luft, Freundschaften, die sich wie die zweite Familie anfühlen und eine Menge Spass bist, dann bist du bei uns genau richtig!",
  ogImage: "/img/gruppenfoto-abteilung.jpg",
  twitterCard: "summary_large_image"
});
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

main {
  h1 {
    grid-column: 1/13;
    text-align: center;
  }

  .links-wrapper {
    grid-column: 1/13;

    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

}
</style>