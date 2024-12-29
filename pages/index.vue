<template>
  <div>
    <DefaultHero :wave="false">Willkommen bei der</DefaultHero>
    <AnmeldenBanner />
    <main>
      <h1>Das sind wir</h1>
      <section class="start-page-content grid-container">
        <p class="intro-text">
          <ClientOnly>
            <PolaroidPhoto src="/img/gruppenfoto-abteilung.jpg"
                           alt="Gruppenfoto der Pfadi Schenkenberg mit der Abteilungsfahne und der Bezirksfahne im Auffahrtslager 2024"
                           class="polaroid-1 polaroid-1--mobile ">
              Abteilungsfoto Aufla 24
            </PolaroidPhoto>
          </ClientOnly>
          Wenn auch du auf der Suche nach funkelnden Augen, Abenteuer an der frischen Luft, Freundschaften, die sich wie
          die zweite Familie anfühlen und eine Menge Spass bist, dann bist du bei uns genau richtig. Denn wir treffen
          uns jeden Samstagnachmittag, meist rund um Basel und draussen in der Natur: Gemeinsam spielen, eine
          Schnitzeljagd machen, lustigen Kreaturen helfen, fein essen, etwas Sinnvolles lernen oder es einfach schön
          miteinander haben.<br />
          Nebst den Samstagsaktivitäten finden jedes Jahr ein Auffahrts-/Pfingstlager in der ganzen Abteilung, ein
          zweiwöchiges Sommerlager in der Pfadistufe und ein einwöchiges Herbstlager in der Wölflistufe statt.
        </p>
        <ClientOnly>
          <PolaroidPhoto src="/img/gruppenfoto-abteilung.jpg"
                         alt="Gruppenfoto der Pfadi Schenkenberg mit der Abteilungsfahne und der Bezirksfahne im Auffahrtslager 2024"
                         class="polaroid-1 polaroid-1--desktop">
            Abteilungsfoto Aufla 200
          </PolaroidPhoto>
        </ClientOnly>
        <ClientOnly>
          <PolaroidPhoto src="/img/kinder-spielen.jpg"
                         alt="Kinder der Pfadi Schenkenberg spielen draussen ein Spiel im Pfingstlager 2021"
                         class="polaroid-2 polaroid-2--mobile">PfiLa 2021
          </PolaroidPhoto>
        </ClientOnly>
        <div class="main-text">
          <p>Wir schaffen unvergessliche Momente in drei Altersstufen:<br>
            <em>(dabei sind wir politisch und konfessionell neutral)</em>
          </p>
          <ul class="ages">
            <li><b>Die Wölfli:</b> 6 - 11 Jahre</li>
            <li><b>Die Pfadis:</b> 11 - 14 Jahre</li>
            <li><b>Die Pios:</b> 14 - 16 Jahre</li>
          </ul>
          <p>
            Wenn du Interesse hast, kannst du jederzeit vorbeikommen, um etwas Pfadiluft zu schnuppern.
            Bei Fragen geben wir gerne Auskunft.<br>
            Wir freuen uns auf dich!</p>
          <div class="anmelde-link">
            <FancyLink to="/administratives#schnuppern">Jetzt anmelden</FancyLink>
          </div>
          <div id="note-ages">
            <img src="assets/img/arrow-note-ages.svg" alt="Gestrichelter Pfeil" draggable="false">
            <p>Die Altersangaben sind nur<br>
              grobe Richtwerte</p>
          </div>
        </div>
        <ClientOnly>
          <PolaroidPhoto src="/img/kinder-spielen.jpg"
                         alt="Kinder der Pfadi Schenkenberg spielen draussen ein Spiel im Pfingstlager 2021"
                         class="polaroid-2 polaroid-2--desktop">PfiLa 2021
          </PolaroidPhoto>
        </ClientOnly>
      </section>
    </main>
  </div>
</template>


<script setup lang="ts">

const seo = {
  title: "Startseite | Pfadi Schenkenberg",
  description: "Wenn du auf der Suche nach funkelnden Augen, Abenteuer an der frischen Luft, Freundschaften, und eine Menge Spass für dein Kind bist, dann bist du bei der Pfadi Schenkenberg in Basel genau richtig!"
};

useSeoMeta({
  title: seo.title,
  ogTitle: seo.title,
  description: seo.description,
  ogDescription: seo.description,
  ogImage: "/img/kinder-spielen.jpg",
  twitterCard: "summary_large_image"
});
</script>

<style lang="scss" scoped>
@use "assets/scss/includes" as var;

main {
  h1 {
    text-align: center;
  }

  .polaroid-photo {
    grid-column: 1/13;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .polaroid-1--desktop, .polaroid-2--desktop {
    display: none;
  }

  .intro-text {
    grid-column: 1/13;
  }

  .main-text {
    grid-column: 1/13;


    .ages {
      text-align: center;
      margin-block: 2rem;
    }

    #note-ages {
      display: none;
    }

    .anmelde-link {
      margin-top: 2rem;

      display: flex;
      justify-content: center;
    }
  }

  @media screen and (min-width: var.$screen-size-between) {
    .start-page-content {

      .polaroid-1--mobile {
        width: max(calc(50% - 1rem), 30rem);
        margin-left: 1rem;
        float: right;
      }

      .polaroid-2--mobile {
        margin-inline: 0;
        grid-column: 3/11;
      }
    }
  }

  @media screen and (min-width: var.$screen-size-medium) {

    margin-top: 6rem;

    .intro-text {
      grid-column: 1/7;
    }

    .main-text {
      grid-column: 1/7;

      .ages {
        text-align: left;
      }

      #note-ages {
        display: inherit;

        position: relative;
        bottom: 17rem;
        left: -7.5rem;
        margin-bottom: -18rem;
        margin-right: -7.5rem;
        z-index: -1;

        img {
          height: 15rem;
        }

        p {
          width: max-content;
          margin-top: 1rem;
          font-size: 2rem;
          font-family: "Patrick Hand", sans-serif;

          transform: rotate(10deg);
        }
      }
    }

    .polaroid-1--mobile, .polaroid-2--mobile {
      display: none;
    }
    .polaroid-2--desktop, .polaroid-1--desktop {
      display: block;
      grid-column: 7/13;
    }

  }
}

</style>