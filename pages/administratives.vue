<template>
  <div>
    <DefaultHero>Administratives zur</DefaultHero>
    <main class="grid-container">
      <h1>Alles Administrative</h1>
      <div class="admin-content grid-container">
        <div class="admin-segment grid-container">
          <h2 id="kontakte">Kontakte</h2>
          <p class="admin-segment-text">Bei Fragen und Anliegen kannst du dich in erster Linie an die Stufenleitung der
            betreffenden Stufe wenden.
            Für allgemeine Fragen und Anliegen, die nicht spezifisch eine bestimmte Stufe betreffen, steht die
            Abteilungsleitung zur Verfügung.</p>
          <div class="admin-segment-list">
            <div v-for="contact in contacts" class="admin-segment-list-element">
              <h3>{{ contact.leaderTitle }}</h3>
              <p v-for="leader in contact.leaders">
                {{ `${leader.name} v/o ${leader.vulgo}` }}
              </p>
              <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            </div>
          </div>
        </div>
        <div class="admin-segment grid-container" id="schnuppern">
          <h2>Schnuppern</h2>
          <p class="admin-segment-text">Um dich oder dein Kind zum Schnuppern anzumelden, schreibe der zuständigen
            Leitperson eine E-Mail oder komme an einem offiziellen Schnupperanlass vorbei. Dieser findet für gewöhnlich
            im März statt.</p>
          <p class="admin-segment-text">Wenn man 2–3 mal zum Schnuppern vorbeigekommen ist und weiterhin kommen möchte,
            kann man das Anmeldeformular der Stufenleitung per Mail schicken oder es ausgedruckt an einen Anlass
            mitbringen.</p>
        </div>
        <div class="admin-segment">
          <h2>Dokumente</h2>
          <div class="admin-segment-list">
            <div class="admin-segment-list-element">
              <h3>Quartalspläne</h3>
              <File src="/files/kalender/Kalender_Wölfli_2025_4.pdf"/>
              <File src="/files/kalender/Kalender_Pfadi_2025_4.pdf"/>
            </div>
            <div class="admin-segment-list-element">
              <h3>Mitgliederformulare</h3>
              <File src="/files/Begruessungsbrief.pdf"/>
              <File src="/files/Mitgliederformular_Woelfe.pdf"/>
              <File src="/files/Mitgliederformular_Pfadi.pdf"/>
            </div>
            <div class="admin-segment-list-element admin-rufe">
              <h3>Rufe</h3>
              <File src="/files/Rufe_Schenkenberg.pdf"/>

              <div id="note-rufe">
                <img src="assets/img/arrow-note-rufe.svg" alt="Gestrichelter Pfeil" draggable="false">
                <p>Der Ruf wird immer beim<br>
                  An- und Abwatscheln gerufen.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="admin-segment something-missing">
          <p>Etwas fehlt oder ist falsch?</p>
          <FancyLink to="mailto:it@pfadischenkenberg.ch">Schreib uns eine Mail</FancyLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const seo = {
  title: "Administratives | Pfadi Schenkenberg",
  description: "Willst du bei der Pfadi Schenkenberg in Basel vorbeischauen oder suchst du Dokumente und deine Ansprechpersonen? Hier findest du alles Administrative."

};

useSeoMeta({
  title: seo.title,
  ogTitle: seo.title,
  description: seo.description,
  ogDescription: seo.description, ogImage: "/img/gruppenfoto-abteilung.jpg",
  twitterCard: "summary_large_image"
});

type Contact = {
  leaderTitle: string,
  email: string,
  leaders:
      {
        name: string,
        vulgo: string
      }[]
}

const contacts: Array<Contact> = [
  {
    leaderTitle: "Stufenleitung Wölfli",
    email: "woelfli@pfadischenkenberg.ch",
    leaders: [{
      name: "Isabel Nwose",
      vulgo: "Kassiopeia"
    }, {
      name: "Enea Lazzari",
      vulgo: "Twig"
    }]
  }, {
    leaderTitle: "Stufenleitung Pfadi",
    email: "pfadi@pfadischenkenberg.ch",
    leaders: [{name: "Emma Werthemann", vulgo: "Malaika"}]
  }, {
    leaderTitle: "Stufenleitung Pio",
    email: "pio@pfadischenkenberg.ch",
    leaders: [{
      name: "Zora Landolt",
      vulgo: "Guarda"
    }]
  }, {/*
    leaderTitle: "APV-Verantwortlich",
    email: "apv@pfadischenkenberg.ch",
    leaders: [{name: "Tim Purtschert", vulgo: "Chirpa"}]
  }, {*/
    leaderTitle: "Abteilungsleitung",
    email: "abteilung@pfadischenkenberg.ch",
    leaders: [{name: "Joshua Dunkel", vulgo: "Hauro"}, {name: "Jara Senn", vulgo: "Mononoke"}]
  }];
</script>

<style lang="scss" scoped>
@use "assets/scss/includes" as var;

main {

  h1 {
    grid-column: 1 / 13;
    text-align: center;
  }

  .admin-content {
    grid-column: 1 / 13;

    display: flex;
    flex-direction: column;
    gap: 4rem;

    .admin-segment {
      grid-column: 1 / 13;

      h2 {
        grid-column: 1 / 13;
      }

      .admin-segment-text {
        grid-column: 1/13;
      }

      .admin-segment-list {
        grid-column: 1/13;
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;

        .admin-segment-list-element {
          position: relative;

          h3 {
            font-size: 1.5rem;
            color: var.$burnt-sienna-400;
            font-weight: 600;
          }

          p {
            margin: 0.2rem 0 0;
          }

          .file {
            margin: 0.5rem 0 0.5rem;
          }

          a {
            font-size: 1.2rem;
          }

          #note-rufe {
            display: none;
          }
        }
      }

    }

    .something-missing {
      grid-column: 1/13;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        margin: 0 0 0.5rem;

        font-family: "Patrick Hand", sans-serif;
        font-size: 2rem;
        line-height: 2rem;
        text-align: center;
      }
    }
  }

  @media screen and (min-width: var.$screen-size-between) {
    .admin-content {
      .something-missing > p {
        font-size: 3.2rem;
        line-height: 3.2rem;
        margin: 0;
      }
    }
  }

  @media screen and (min-width: var.$screen-size-medium) {

    .admin-content {
      .admin-segment {
        .admin-segment-text {
          grid-column: 1/8;
        }

        .admin-segment-list {

          gap: 2rem;

          .admin-segment-list-element {
            h3 {
              font-size: 2rem;
            }

            #note-rufe {
              display: block;
              position: relative;
              bottom: 5rem;
              right: -20rem;
              z-index: -1;

              img {
                height: 12rem;
              }

              p {
                position: relative;
                right: 18rem;
                font-size: 2rem;
                font-family: "Patrick Hand", sans-serif;
                font-weight: 400;

                transform: rotate(-5.5deg);
              }
            }

          }
        }
      }

    }
  }
}
</style>