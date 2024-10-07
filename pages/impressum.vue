<template>
  <div>

    <DefaultHero>Impressum der</DefaultHero>
    <main class="grid-container">
      <h1>Impressum</h1>
      <section class="grid-container">
        <h2>Redaktion</h2>

        <p>Pfadi Schenkenberg, Bezirk Zytröseli, Basel</p>
      </section>

      <section class="grid-container">
        <h2>Design und Programmierung</h2>

        <p>Das Design und die Entwicklung entstanden durch Tim Landolt <span>v/o</span> Balu und in enger Zusammenarbeit
          mit seinen
          Mitleiterinnen:</p>
        <ul>
          <li>Jara Senn v/o Mononoke</li>
          <li>Solenne Saltel v/o Paloma</li>
          <li>Zora Landolt v/o Guarda</li>
        </ul>
      </section>

      <section class="grid-container">
        <h2>Lizenzen</h2>

        <p>Die verwendeten Icons stammen in farblich angepasster Form u.a. von:</p>
        <ul>
          <li><a href="https://dazzleui.gumroad.com/l/dazzleiconsfree?ref=svgrepo.com" target="_blank">Dazzle Ui</a> und
            stehen unter der CC Attribution Lizenz via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a>.
          </li>
          <li><a href="https://www.primefaces.org/diamond/icons.xhtml?ref=svgrepo.com" target="_blank">Primefaces</a>
            unter der MIT Lizenz via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a></li>
        </ul>
      </section>
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

  section {
    grid-column: 1/13;

    &:not(:first-of-type) {
      margin-top: 4rem;
    }


    h2, p, ul {
      grid-column: 1/9;
      list-style: initial;
    }
  }
}
</style>