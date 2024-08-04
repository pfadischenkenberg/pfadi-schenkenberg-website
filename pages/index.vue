<template>
  <div>
    <DefaultHero>Willkommen bei der</DefaultHero>
    <AnmeldenBanner/>
    <main class="grid-container">
      <div class="text">
        <h1>Das sind wir</h1>
        <p>Wenn auch du auf der Suche nach funkelnden Augen, Abenteuer an der frischen Luft, Freundschaften, die sich
          wie
          die zweite Familie anfühlen und eine Menge Spass bist, dann bist du bei uns genau richtig. Denn wir treffen
          uns
          jeden Samstagnachmittag, meist rund um Basel und draussen in der Natur: Gemeinsam spielen, eine Schnitzeljagd
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
          <FancyLink to="www.google.com">Jetzt vorbeischauen!</FancyLink>
        </div>
        <div id="note-ages">
          <img src="assets/img/arrow-note-ages.svg" alt="Gestrichelter Pfeil" draggable="false">
          <p>Die Altersangaben sind nur<br>
            grobe Richtwerte</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
main {
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

}
</style>