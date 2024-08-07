<template>
  <div>
    <DefaultHero>Die Stufen der</DefaultHero>
    <main class="grid-container">
      <h1>Unsere drei Stufen</h1>
      <ScoutStage v-for="stage in stages"
                  :stage="stage" />
    </main>
  </div>
</template>

<script setup lang="ts">
const stages = [
  {
    title: "Die Wölfli",
    targetGroup: "6-11 Jahre",
    image: {
      src: "/img/gruppenfoto-abteilung.jpg",
      alt: "Blablabla",
      description: "Abteilungsgruppenfoto AufLa 2024"
    },
    leaders: {
      label: "Stufenleitung",
      list: [{
        name: "Jara Senn",
        vulgo: "Mononoke",
        email: "jara.senn@gmx.ch"
      }]
    },
    calendar: {
      existing: true,
      src: "/kalender/test-kalender.pdf"
    },
    text: {
      intro: "Bist du zwischen 6 und 11 Jahre alt und willst die Welt der Wölfli sowie viele verschiedene Abenteuer erleben? Dann bist du bei uns in der Wölfli-Stufe der Pfadi Schenkenberg genau Richtig!",
      main: `Bei uns geht es darum, Spiele zu spielen, etwas Neues zu lernen, Spass zu haben und zusammen spannende Abenteuer zu erleben. Dabei versuchen wir in dem Pfingstlager, Herbstlager oder an den Samstagnachmittagen verschiedenen Gestalten zu helfen. Wobei wir einander nie im Stich lassen!
Am Samstag treffen wir uns entweder an den Orten direkt (hier geht es zum Quartalplan). Wir bieten oft auch einen Bring-und-hol-Dienst an, bei dem wir uns am Aeschenplatz treffen und von dort aus in den Wald um Basel gehen.<br/><br/>
Wir geben immer alles, um die beste Zeit zusammen zu verbringen und würden uns sehr freuen, neue Gesichter begrüssen zu dürfen.<br/><br/>
Wenn du Lust hast, schnuppern zu kommen, kannst du einfach an einem Samstagnachmittag vorbeischauen!<br/><br/>
Wir freuen uns auf dich!`
    }
  },
  {
    title: "Die Pfadis",
    targetGroup: "11-14 Jahre",
    image: {
      src: "/img/gruppenfoto-abteilung.jpg",
      alt: "Blablabla",
      description: "Abteilungsgruppenfoto AufLa 2024"
    },
    leaders: {
      label: "Stufenleitung",
      list: [{
        name: "Jara Senn",
        vulgo: "Mononoke",
        email: "jara.senn@gmx.ch"
      },{
        name: "Jara Senn",
        vulgo: "Mononoke",
        email: "jara.senn@gmx.ch"
      }]
    },
    calendar: {
      existing: true,
      src: "/kalender/test-kalender.pdf"
    },
    text: {
      intro: "Bist du zwischen 6 und 11 Jahre alt und willst die Welt der Wölfli sowie viele verschiedene Abenteuer erleben? Dann bist du bei uns in der Wölfli-Stufe der Pfadi Schenkenberg genau Richtig!",
      main: `Bei uns geht es darum, Spiele zu spielen, etwas Neues zu lernen, Spass zu haben und zusammen spannende Abenteuer zu erleben. Dabei versuchen wir in dem Pfingstlager, Herbstlager oder an den Samstagnachmittagen verschiedenen Gestalten zu helfen. Wobei wir einander nie im Stich lassen!
Am Samstag treffen wir uns entweder an den Orten direkt (hier geht es zum Quartalplan). Wir bieten oft auch einen Bring-und-hol-Dienst an, bei dem wir uns am Aeschenplatz treffen und von dort aus in den Wald um Basel gehen.<br/><br/>
Wir geben immer alles, um die beste Zeit zusammen zu verbringen und würden uns sehr freuen, neue Gesichter begrüssen zu dürfen.<br/><br/>
Wenn du Lust hast, schnuppern zu kommen, kannst du einfach an einem Samstagnachmittag vorbeischauen!<br/><br/>
Wir freuen uns auf dich!`
    }
  }
];
</script>

<style lang="scss" scoped>
main {
  h1 {
    grid-column: 1 / 13;
    text-align: center;
  }
}
</style>