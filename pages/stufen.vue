<template>
  <div>
    <DefaultHero>Die Stufen der</DefaultHero>
    <main class="grid-container">
      <h1>Unsere drei Stufen</h1>
      <div class="scout-stages grid-container">
        <ScoutStage v-for="stage in stages"
                    :stage="stage" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">

const seo = {
  title: "Stufen | Pfadi Schenkenberg",
  description: "Die Pfadi Schenkenberg trifft sich in der Wölfli-, Pfadi- und Piostufe regelmässig an den Samstagnachmittagen in der Region um Basel."
};

useSeoMeta({
  title: seo.title,
  ogTitle: seo.title,
  description: seo.description,
  ogDescription: seo.description,
  ogImage: "/img/gruppenfoto-abteilung.jpg",
  twitterCard: "summary_large_image"
});

const stages = [
  {
    title: "Die Wölfli",
    targetGroup: "6-11 Jahre",
    email: "woelfli@pfadischenkenberg.ch",
    image: {
      src: "/img/leitungsteam-woelfli.jpg",
      alt: "Leitungsteam der Wölflistufe der Pfadi Schenkenberg im AufLa 2024",
      description: "Wölflileitungsteam im AufLa 2024 (veraltet)"
    },
    leaders: {
      label: "Stufenleitung",
      list: [{
        name: "Isabel Nwose",
        vulgo: "Kassiopeia"
      }, {
        name: "Enea Lazzari",
        vulgo: "Twig"
      }]
    },
    calendar: {
      existing: true,
      src: "/files/kalender/Kalender_Wölfli_2025_3.pdf"
    },
    text: {
      intro: "Bist du zwischen 6 und 11 Jahre alt und willst die Welt der Wölfli sowie viele verschiedene Abenteuer erleben? Dann bist du bei uns in der Wölfli-Stufe der Pfadi Schenkenberg genau Richtig!",
      main: `Bei uns geht es darum, Spiele zu spielen, etwas Neues zu lernen, Spass zu haben und zusammen spannende Abenteuer zu erleben. Dabei versuchen wir in den Auffahrts- und Herbstlager oder an den Samstagnachmittagen verschiedenen Gestalten zu helfen. Wobei wir einander nie im Stich lassen!
An den Samstagen treffen wir uns immer an verschiedenen Tramhaltestellen rund um Basel. Von dort aus gehen wir jeweils zusammen in den Wald.<br>
Zusätzlich bieten wir oft einen Bring-und-hol-Dienst an, bei dem wir mit den Kindern zusammen vom Aeschenplatz aus in den Wald fahren.<br/><br/>
Wir geben immer alles, um die beste Zeit zusammen zu verbringen und würden uns sehr freuen, neue Gesichter begrüssen zu dürfen.<br/><br/>
Wenn du Lust hast, schnuppern zu kommen, kannst du einfach an einem Samstagnachmittag vorbeischauen!<br/><br/>
Wir freuen uns auf dich!`
    }
  },
  {
    title: "Die Pfadis",
    targetGroup: "11-14 Jahre",
    email: "pfadi@pfadischenkenberg.ch",
    image: {
      src: "/img/leitungsteam-pfadi.jpg",
      alt: "Leitungsteam der Pfadistufe der Pfadi Schenkenberg im AufLa 2024",
      description: "Pfadileitungsteam im AufLa 2024 (veraltet)"
    },
    leaders: {
      label: "Stufenleitung",
      list: [{
        name: "Zora Landolt",
        vulgo: "Guarda"
      }]
    },
    calendar: {
      existing: true,
      src: "/files/kalender/Kalender_Pfadi_2025_2.pdf"
    },
    text: {
      intro: "Du bist zwischen 11 und 14 Jahren alt? Dann ist die Pfadistufe die richtige Stufe für dich. Gemeinsam verbringen wir Samstagnachmittage mit sportlichen Spielen, kreativen Aufgaben und natürlich viel Spass!",
      main: `In der Pfadistufe begegnen wir verschiedensten Wesen, mit denen wir Spielen, Rätsel lösen & mit unseren kreativen Ideen helfen. Wir verbringen die meisten Samstage draussen im Wald, wo wir uns sportlich austoben, die Natur kennenlernen und als Gruppe zusammenwachsen. Aber auch Aktivitäten wie gemeinsames Kochen, einen Ausflug in die Kletterhalle, oder ein Filmabend dürfen nicht fehlen. Das Highlight des Pfadijahres ist das Sommerlager, in welchem wir zwei Wochen draussen & im Zelt verbringen. Nebst vielem Spielen kommt das Wandern, Erlernen nützlicher Pfaditechnik und Singen am Lagerfeuer natürlich nicht zu kurz!
<br/><br/>
Komm gerne einfach vorbei, wir freuen uns auf dich!
`
    }
  },
  {
    title: "Die Pios",
    targetGroup: "14-16 Jahre",
    email: "pio@pfadischenkenberg.ch",
    image: {
      src: "/img/leitungsteam-pio.jpg",
      alt: "Leitungsteam der Piostufe der Pfadi Schenkenberg um AufLa 2024",
      description: "Pioleitungsteam im AufLa 2024 (sehr veraltet)"
    },
    leaders: {
      label: "Stufenleitung",
      list: [{
        name: "Dan Malzacher",
        vulgo: "Faramir"
      }]
    },
    calendar: {
      existing: false
    },
    text: {
      intro: "Die Pios sind die ältesten Teilnehmenden und es ist die letzte Stufe vor dem Leiten. Und darauf sollte sie auch vorbereiten. Die Pios lernen, Aktivitäten zu planen, Wanderungen durchzuführen und weitere Skills, die für das Leiten wichtig sind. Dabei darf der Spass aber natürlich nicht zu kurz kommen.",
      main: `Die Aktivitäten, die ca. alle zwei Wochen stattfinden, werden teilweise von den Pios selbst geplant. Diese sind zum Beispiel Spieleabende, Besuche in der Kletterhalle oder auch Bowling. In der Pio-Stufe finden auch gelegentlich Weekends, wie z. B. Wanderweekends mit der Hängematte, statt.<br/>
Auch die SoLas sind für die Pios etwas Spezielles. In der Vergangenheit machten die Pios eine mehrtägige Velotour von Basel an den Lagerplatz des Pfadi SoLas und ein Auslands-SoLa in Schweden.<br/>
Wenn die Pios kein eigenes Programm haben, können sie immer auch an den regulären Anlässen der Pfadi-Stufe teilnehmen.`
    }
  },
  /*{
    title: "Der APV",
    targetGroup: "Altpfadfinder*innenverein",
    email: "apv@pfadischenkenberg.ch",
    image: {
      src: "/img/foto-apv.jpg",
      alt: "Der Altpfadvinderverein der Pfadi Schenkenberg an einem APV-Anlass gemeinsamen am Abendessen.",
      description: "APV-Abendessen"
    },
    leaders: {
      label: "APV-Verantwortlicher",
      list: [{
        name: "Tim Purtschert",
        vulgo: "Chirpa"
      }]
    },
    calendar: {
      existing: false
    },
    text: {
      intro: "Der APV ist ein wichtiges Organ in der Vereinsstruktur des Schenkenbergs. Ehemalige Leitpersonen können weiterhin über die aktuellen Geschehnisse des Pfadialltags informiert oder miteinbezogen werden.",
      main: `Sie erhalten nicht nur den «Pfadi Schenkenberg Newsletter», sondern werden auch zu speziellen Aktivitäten wie dem Besuchstag oder dem Jahresabschluss eingeladen. Zusätzlich wird einmal im Jahr ein APV-Anlass organisiert, an dem Jung und Alt zusammenkommt und mit spassigen Spielen oder interessanten Gesprächen die Zeit verbringt.<br/><br/>
Der APV ist auch eine wichtige finanzielle Stütze für den Verein und kann das aktive Leitungsteam bei Herausforderungen unterstützen. Mit dem APV eröffnet sich ein grosses Netzwerk an erfahrenen und motivierten Schenkenbergler:innen, die sich gerne bei Problemen anbieten.<br/><br/>
Zurzeit steht der APV in einer Überarbeitungsphase und soll wieder aktiver belebt werden. Vor allem Lücken in der Kontaktdatensammlung sollen gefüllt werden. Bei Fragen oder fehlenden Kontakten, könnt ihr euch gerne bei Chirpa melden.`
    }
  }*/
];
</script>

<style lang="scss" scoped>
main {
  h1 {
    grid-column: 1 / 13;
    text-align: center;
  }

  .scout-stages {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
}
</style>