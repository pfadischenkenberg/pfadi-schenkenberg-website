<template>
  <div class="scout-stage grid-container">
    <div class="scout-stage-title">
      <h2>{{ stage.title }}</h2>
      <h3>{{ stage.targetGroup }}</h3>
    </div>
    <div class="scout-stage-content grid-container">
      <div class="scout-stage-text scout-stage-text--full">
        <p v-html="stage.text.intro"></p>
        <p v-html="stage.text.main"></p>
      </div>
      <div class="scout-stage-text scout-stage-text--expandable">
        <p>
          <span v-html="stage.text.intro"></span> &nbsp;
          <button class="button--text expand-button" v-if="!expanded" v-on:click="toggleExpanded()">... mehr</button>
        </p>
        <p v-if="expanded">
          <span v-html="stage.text.main"></span> &nbsp;
          <button class="button--text" v-on:click="toggleExpanded()"> weniger anzeigen</button>
        </p>

      </div>
      <div class="scout-stage-side">
        <PolaroidPhoto :src="stage.image.src" :alt="stage.image.alt">
          {{ stage.image.description }}
        </PolaroidPhoto>
        <div class="scout-stage-data">
          <div class="scout-stage-leaders">
            <h4>{{ stage.leaders.label }}</h4>
            <p v-for="leader in stage.leaders.list">{{ `${leader.name} v/o ${leader.vulgo}` }}</p>
            <a :href="`mailto:${stage.email}`">{{ stage.email }}</a>
          </div>

          <div v-if="stage.calendar.existing" class="scout-stage-calendar">
            <h4>Quartalskalender</h4>
            <File :src="stage.calendar.src" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

interface ScoutStageProps {
  title: string,
  targetGroup: string,
  email: string,
  image: {
    src: string,
    alt: string,
    description: string
  },
  leaders: {
    label: string,
    list: [{
      name: string,
      vulgo: string,
    }]
  },
  calendar: {
    existing: boolean,
    src: string
  },
  text: {
    intro: string
    main: string
  }

}

const props = defineProps<{ stage: ScoutStageProps }>();

const stage = props.stage;

const expanded = ref(false);

function toggleExpanded() {
  expanded.value = !expanded.value;
}


</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.scout-stage {

  grid-column: 1/13;

  .scout-stage-title {
    grid-column: 1/13;
  }

  .scout-stage-content {
    grid-column: 1/13;

    .scout-stage-text {
      grid-column: 1/13;
    }

    .scout-stage-text--full {
      display: none;
    }

    .scout-stage-side {
      grid-column: 1/13;
      display: flex;
      flex-direction: column;
      gap: 3rem;

      .scout-stage-data {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        h4 {
          line-height: 1.5rem;
          font-weight: bold;
          color: $burnt-sienna-400;
        }


        p, a {
          font-size: 1.2rem;
          line-height: 1.2rem;
          margin: 0;
        }

        p {
          font-weight: 500;
        }

        div {
          display: flex;
          flex-direction: column;

          gap: 1rem;

        }

        .scout-stage-leaders {
          div {
            gap: 0.4rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: $screen-size-medium) {
    .scout-stage-content {

      .scout-stage-text {
        grid-column: 1/8;
      }

      .scout-stage-text--full {
        display: block;
      }

      .scout-stage-text--expandable {
        display: none;
      }

      .scout-stage-side {
        grid-column: 8/13;

        .scout-stage-data {
          flex-direction: row;
          gap: 1.5rem;
        }
      }
    }
  }

}
</style>