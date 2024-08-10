<template>
  <div>
    <DefaultHero :wave="false">Willkommen bei der</DefaultHero>
    <AnmeldenBanner />
    <main class="grid-container">
      <div class="text">
        <h1>Das sind wir</h1>
        <p>Wenn auch du auf der Suche nach funkelnden Augen, Abenteuer an der frischen Luft, Freundschaften, die sich
          wie die zweite Familie anfühlen und eine Menge Spass bist, dann bist du bei uns genau richtig. Denn wir
          treffen
          uns jeden Samstagnachmittag, meist rund um Basel und draussen in der Natur: Gemeinsam spielen, eine
          Schnitzeljagd
          machen, lustigen Kreaturen helfen, fein essen, etwas Sinnvolles lernen oder es einfach schön miteinander
          haben.</p>
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
      </div>
      <div class="photo-wrapper">
        <PolaroidPhoto src="/img/kinder-spielen.jpg"
                       alt="Kinder der Pfadi Schenkenberg spielen draussen ein Spiel im Pfingstlager 2021">PfiLa 2021
        </PolaroidPhoto>
        <PolaroidPhoto src="/img/gruppenfoto-abteilung.jpg"
                       alt="Gruppenfoto der Pfadi Schenkenberg mit der Abteilungsfahne und der Bezirksfahne im Auffahrtslager 2024">
          Abteilungs-Gruppenfoto Aufla 24
        </PolaroidPhoto>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Startseite | Pfadi Schenkenberg",
  ogTitle: "Startseite | Pfadi Schenkenberg",
  description: "Wenn auch du auf der Suche nach funkelnden Augen, Abenteuer an der frischen Luft, Freundschaften, die sich wie die zweite Familie anfühlen und eine Menge Spass bist, dann bist du bei uns genau richtig!",
  ogDescription: "Wenn auch du auf der Suche nach funkelnden Augen, Abenteuer an der frischen Luft, Freundschaften, die sich wie die zweite Familie anfühlen und eine Menge Spass bist, dann bist du bei uns genau richtig!",
  ogImage: "/img/kinder-spielen.jpg",
  twitterCard: "summary_large_image"
});
</script>

<style lang="scss" scoped>
main {
  margin-top: 6rem;

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

      @media screen and (max-width: 1000px) {
        display: none;
      }
    }
  }

  .photo-wrapper {
    grid-column: 8/13;

    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

}
</style>