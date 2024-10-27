<template>
  <div>
    <DefaultHero :wave="false">Willkommen bei der</DefaultHero>
    <AnmeldenBanner />
    <main>
      <h1>Das sind wir</h1>
      <div class="section-1">
        <PolaroidPhoto src="/img/gruppenfoto-abteilung.jpg"
                       alt="Gruppenfoto der Pfadi Schenkenberg mit der Abteilungsfahne und der Bezirksfahne im Auffahrtslager 2024">
          Abteilungsfoto Aufla 24
        </PolaroidPhoto>
        <p class="intro-text">Wenn auch du auf der Suche nach funkelnden Augen, Abenteuer an der frischen Luft,
          Freundschaften, die sich
          wie die zweite Familie anfühlen und eine Menge Spass bist, dann bist du bei uns genau richtig. Denn wir
          treffen
          uns jeden Samstagnachmittag, meist rund um Basel und draussen in der Natur: Gemeinsam spielen, eine
          Schnitzeljagd
          machen, lustigen Kreaturen helfen, fein essen, etwas Sinnvolles lernen oder es einfach schön miteinander
          haben.</p>
      </div>
      <div class="section-2">
        <PolaroidPhoto src="/img/kinder-spielen.jpg"
                       alt="Kinder der Pfadi Schenkenberg spielen draussen ein Spiel im Pfingstlager 2021">PfiLa 2021
        </PolaroidPhoto>
        <div class="text">
          <p>Wir schaffen unvergessliche Momente in drei Altersstufen:<br>
            <em>(dabei sind wir politisch und konfessionell neutral)</em>
          </p>
          <ul class="ages">
            <li><b>Die Wölfli:</b> 6 - 11 Jahre</li>
            <li><b>Die Pfadis:</b> 11 - 14 Jahre</li>
            <li><b>Die Pios:</b> 14 - 16 Jahre</li>
          </ul>
          <p>
            Wenn du Interesse hast, kannst du jederzeit vorbeikommen, um etwas Pfadiluft zu schnuppern
            Bei Fragen geben wir gerne Auskunft.<br>
            Wir freuen uns auf dich!</p>
          <div class="anmelde-link">
            <FancyLink to="/administratives#schnuppern">Jetzt anmelden</FancyLink>
          </div>
        </div>
      </div>
      <div id="note-ages">
        <img src="assets/img/arrow-note-ages.svg" alt="Gestrichelter Pfeil" draggable="false">
        <p>Die Altersangaben sind nur<br>
          grobe Richtwerte</p>
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
  * {
    outline: lime 1px !important;
  }
  h1 {
    margin-bottom: 2rem;

    font-size: 3.5rem;
    line-height: 3.5rem;
    text-align: center;
  }

  .polaroid-photo {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

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

  @media screen and (min-width: 900px) {
    .polaroid-photo {
      float: right;
      width: max(calc(50% - 1rem), 30rem);
      margin-left: 1rem;
    }

    .section-2 {
      width: 100%;

      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;

      .polaroid-photo {
        width: 100%;
        flex: 0 0 max(calc(50% - 1rem), 30rem);
      }

      .text {
        flex: 1;
      }
    }

  }

  @media screen and (min-width: $screen-size-medium) {
    .polaroid-photo {
      width: calc(40% - 1rem);
    }

    .section-2 {
      .polaroid-photo {
        width: 100%;
        flex: 0 0 calc(40% - 1rem);
      }

      .ages {
        text-align: left;
      }
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
}

</style>