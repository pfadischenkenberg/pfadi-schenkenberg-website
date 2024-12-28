<template>
  <div>
    <DefaultHero>Mögliche Fragen zur</DefaultHero>
    <main class="grid-container">
      <h1>Fragen, die auftauchen könnten</h1>
      <Accordion title="Was ist Pfadi?">
        <p>Die Pfadibewegung ist aktuell die grösste Jugendorganisation und steht für Offenheit, Freundschaft,
          Engagement, Zusammenhalt und Toleranz.<br>
          Die Pfadi Schenkenberg gehört zu dem Bezirk Zytröseli, welcher aus den
          5 Pfadi Abteilungen Ramstein, Falkenstein, Schalberg, Bischofstein und Schenkenberg besteht. Der Bezirk gehört
          zum Kantonalverband "Pfadi Region Basel" welcher Wiederum zur Pfadibewegung Schweiz gehört.<br>
          Die Pfadi ist eine
          Freizeitbeschäftigung, bei der das Erleben von Abenteuer in der Natur im Vordergrund steht. Sie bietet die
          Möglichkeit, voneinander zu lernen und sich gegenseitig zu akzeptieren, und sorgt ebenfalls für Verständnis
          aller Mitmenschen.<br>
          Das ehrenamtliche Leitungsteam will mit dem vielseitigen Programm alle Kinder und
          Jugendliche ansprechen.</p>
        <p><b>Mehr darüber:</b> <a href="https://pfadi.swiss" target="_blank">Pfadibewegung Schweiz</a></p>
      </Accordion>
      <Accordion title="Wann muss der Jahresbeitrag bezahlt werden?">
        <p> Eine Rechnung für den Jahresbeitrag wird jeweils im Zeitraum nach den Sommerferien für das angebrochene Jahr
          versendet. Dieser muss bezahlt werden, wenn man zu diesem Zeitpunkt angemeldet ist oder bis vor
          kurzem angemeldet war.</p>
      </Accordion>
      <Accordion title="Welche Ausrüstung braucht man für die Pfadi?">
        <p>Grundsätzlich ist alles, was man für die Pfadi braucht, dem Wetter und</p>
        <p>
          Es gibt ein paar Dinge, die im besten Fall an jedem Anlass dabei sind.<br />
          <b>ZZ</b> - Zündhölzli und Zeitung, um Feuer zu machen<br />
          <b>Gueti Jagt / Technix</b> - Diese praktischen Büchlein sind nützlich zum Spuren entziffern, Karte lesen,
          Knotenmachen und vieles Weiteres, das man in der Pfadi gebrauchen kann. Erhältlich sind diese im
          <NuxtLink to="https://pfadi-region-basel.ch/projekte/pfadilaedeli/" target="_blank">Pfadilädeli</NuxtLink>
          und auf
          <NuxtLink to="https://www.hajk.ch/de/" target="_blank">hajk.ch</NuxtLink>
          . (Gueti Jagt nur für Wölfli)<br />
          <b>Sackmesser</b> - Egal, ob zum Schnitzen oder Schnur schneiden, ein Sackmesser kann in so manchen
          Situationen nützlich sein.<br />
          <b>Pfadikrawatte</b> - Unsere ikonische orange Pfadikrawatte ist unser Wiedererkennungswert. Sie kann
          ausserdem vielseitig eingesetzt werden.<br />
        </p>
        <p>
          Weiteres, das vor allem in den Lagern nützlich ist, ist Folgendes:<br />
          <b>Pfadihemd</b> - Auf dem Pfadihemd sammelt man Drücke und Abzeichen aus den Lagern.<br />
          <b>Pfadipulli</b> - Wir haben auch einen eigenen Pfadipulli. Diesen kann man ausschliesslich im
          <NuxtLink to="https://pfadi-region-basel.ch/projekte/pfadilaedeli/" target="_blank">Pfadilädeli</NuxtLink>
          kaufen.<br />
          <b>Schlafsack</b> - In den Lagern ist ein Schlafsack natürlich unausweichlich. Welcher der richtige ist,
          erfährst du
          <NuxtLink to="https://walking-wild.net/de/wandern-camping-outdoor/campingausrüstung-schlafsack-ratgeber"
                    target="_blank">hier
          </NuxtLink>
          .<br />
          <b>«Mätteli»</b> - Die Schlafmatte braucht man im AufLa / PfiLa und im SoLa. Auf was du beim Kauf eines
          «Mätteli» achten musst, kannst du
          <NuxtLink to="https://www.doorout.com/blog/ratgeber-camping-matten-welche-wann-wo-warum/" target="_blank">
            hier
          </NuxtLink>
          nachlesen.
        </p>
      </Accordion>
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
main {
  h1 {
    grid-column: 1/13;
    text-align: center;
  }

  .accordion {
    grid-column: 2/12;

    p {
      max-width: 80rem;
    }
  }
}
</style>