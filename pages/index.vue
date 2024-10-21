<template>
  <div>
    <DefaultHero :wave="false">Willkommen bei der</DefaultHero>
    <AnmeldenBanner />
    <main class="grid-container">
      <h1>Das sind wir</h1>
      <div class="intro grid-container">
        <p class="intro-text">Wenn auch du auf der Suche nach funkelnden Augen, Abenteuer an der frischen Luft,
          Freundschaften, die sich
          wie die zweite Familie anfühlen und eine Menge Spass bist, dann bist du bei uns genau richtig. Denn wir
          treffen
          uns jeden Samstagnachmittag, meist rund um Basel und draussen in der Natur: Gemeinsam spielen, eine
          Schnitzeljagd
          machen, lustigen Kreaturen helfen, fein essen, etwas Sinnvolles lernen oder es einfach schön miteinander
          haben.</p>


        <PolaroidPhoto src="/img/kinder-spielen.jpg"
                       alt="Kinder der Pfadi Schenkenberg spielen draussen ein Spiel im Pfingstlager 2021">PfiLa 2021
        </PolaroidPhoto>
      </div>
      <div class="text">
        <p>Wir schaffen unvergessliche Momente in drei Altersstufen:<br>
          <em>(dabei sind wir politisch und konfessionell neutral)</em>
          <br><br>
          <b>Die Wölfli:</b> 6 - 11 Jahre<br>
          <b>Die Pfadis:</b> 11 - 14 Jahre<br>
          <b>Die Pios:</b> 14 - 16 Jahre
          <br><br>
          Wenn du Interesse hast, kannst du jederzeit vorbeikommen, um etwas Pfadiluft zu schnuppern
          Bei Fragen geben wir gerne Auskunft.<br>
          Wir freuen uns auf dich!</p>
        <div class="anmelde-link">
          <FancyLink to="/administratives#schnuppern">Jetzt vorbeischauen!</FancyLink>
        </div>
        <div id="note-ages">
          <img src="assets/img/arrow-note-ages.svg" alt="Gestrichelter Pfeil" draggable="false">
          <p>Die Altersangaben sind nur<br>
            grobe Richtwerte</p>
        </div>

        <PolaroidPhoto src="/img/gruppenfoto-abteilung.jpg"
                       alt="Gruppenfoto der Pfadi Schenkenberg mit der Abteilungsfahne und der Bezirksfahne im Auffahrtslager 2024">
          Abteilungsfoto Aufla 24
        </PolaroidPhoto>
      </div>

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
@import "assets/scss/variables";

main {
  margin-top: 6rem;

  .intro {
    grid-column: 1/13;
    
    .polaroid-photo {
      grid-column: 8/13;
    }
  }

  h1, .intro-text {
    grid-column: 1/8;

  }

  .text {
    grid-column: 1/8;

    .anmelde-link {
      width: 100%;
      margin-top: 3rem;
      display: flex;
      justify-content: center;
    }

    #note-ages {
      position: relative;
      bottom: 17.8rem;
      left: -7.5rem;
      margin-bottom: -20rem;
      margin-right: -7.5rem;
      z-index: -1;

      img {
        height: 15rem;
      }

      p {
        margin-top: 5rem;
        font-size: 2rem;
        font-family: "Patrick Hand", sans-serif;
        transform: rotate(10deg);
      }

      @media screen and (max-width: $screen-size-medium) {
        display: none;
      }
    }
  }

  /* Default grid layout */
  .photo-1, .photo-2 {
    grid-column: 8/13;
  }

  @media screen and (max-width: $screen-size-small) {
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Adjust order on mobile */
    h1 {
      order: 1;
    }

    .photo-1 {
      order: 2; /* First photo after title */
    }
    .intro-text {
      order: 3;
    }
    .photo-2 {
      order: 4; /* Second photo after text */
    }
    .text {
      order: 5; /* Text comes after first photo */
      grid-column: 1/8;
    }

    .anmelde-link {
      order: 6; /* Rest of the content */
    }

    #note-ages {
      display: none; /* Hide this section on mobile */
    }
  }
}


</style>