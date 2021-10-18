<template>
  <v-row
    align="center"
    justify="center"
  >
    <!--Main-->
    <v-col
      cols="12"
      :md="main.width"
      style="position:relative;"
    >
      <bg-effect
        :color="$vuetify.theme.themes.light.warning"
        position="100 -35"
        size="600"
      />
      <bg-effect
        :color="$vuetify.theme.themes.light.accent"
        position="10 105"
        size="550"
      />

      <v-row
        :style="{'min-height': main.minHeight}"
        class="d-flex align-center"
      >
        <!--Левый столбец-->
        <v-col md="6" cols="12">
          <h1
            class="text-h3 font-weight-medium"
            :style="{width: main.title.width}"
            v-html="main.title.html"
          />
          <p
            class="my-5 text-subtitle-1 text--secondary"
            :style="{width: main.description.width}"
            v-html="main.description.html"
          />

          <v-btn
            color="primary"
            outlined
            large
          >
            {{ main.feedback.content }}
          </v-btn>
        </v-col>
        <!--Правый столбец-->
        <v-col md="6" cols="12">
          <v-card
            width="100%"
            height="300px"
            elevation="0"
            class="d-flex align-center justify-center text--secondary text-h4"
            :style="{border: '.17rem dashed' + $vuetify.theme.themes.light.primary}"
          >
            Услуги
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col class="pa-0">
      <ticker
        v-if="!$vuetify.breakpoint.smAndDown"
        :items="sponsors.listItems"
        duration="10"
        :repeat-items="7"
      />
    </v-col>

    <v-col
      cols="12"
      :md="sectionOne.width"
      class="d-flex align-center"
      :style="sectionOne.styles"
    >
      <card-service />
    </v-col>

    <v-col
      cols="12"
      :md="sectionOne.width"
      class="d-flex align-center"
      :style="sectionOne.styles"
    >
      <h2>Отзывы</h2>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { EnumTickerItems } from '~/components/custom/ticker.vue'

const ticker = () => import('~/components/custom/ticker.vue')
const bgEffect = () => import('~/components/custom/bg-effect.vue')
const cardService = () => import('~/components/custom/card-service.vue')

const sponsorsList: EnumTickerItems = [
  {
    label: 'Газпром',
    source: require('~/assets/image/main/sponsors/sponsor.png')
  },
  {
    label: 'Газпром',
    source: require('~/assets/image/main/sponsors/sponsor.png')
  }
]

export default Vue.extend({
  name: 'Index',

  components: {
    ticker,
    bgEffect,
    cardService
  },
  layout: 'default',

  data: () => ({
    main: {
      width: 9, // max 12
      minHeight: '500px',

      title: {
        html: 'Шаблонный заголовок',
        width: 'auto'
      },
      description: {
        html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quisquam.',
        width: '300px'
      },
      feedback: {
        content: 'Связь с нами'
      }
    },

    sponsors: {
      listItems: sponsorsList
    },

    sectionOne: {
      width: 9, // max 12

      styles: {
        minHeight: '600px'
      }
    },

    sectionReviews: {
      width: 9, // max 12

      styles: {
        minHeight: '600px'
      }
    }
  }),

  head: {
    title: 'Главная',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ]
  }
})
</script>

<style lang="scss" scoped>

</style>
