<template>
  <v-app>
    <v-app-bar
      fixed
      app
      elevate-on-scroll
      :height="appBar.height"
      :style="appBar.styles"
    >
      <v-container>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="6"
          >
            <v-app-bar-title>
              <nuxt-link
                to="/"
                class="text-h6 text-md-h5 text--primary font-weight-bold d-flex align-center justify-start"
                style="text-decoration: none"
              >
                {{ title }}
              </nuxt-link>
            </v-app-bar-title>
          </v-col>

          <v-spacer />

          <v-col
            cols="6"
            class="d-flex justify-space-between"
          >
            <v-tabs
              v-if="!$vuetify.breakpoint.mobile"
              color="primary"
              background-color="transparent"
            >
              <v-tab
                v-for="(link, i) in appBar.links"
                :key="i"
                :to="link.to"
                router
                exact
                link
              >
                <span>
                  {{ link.name }}
                </span>
              </v-tab>
            </v-tabs>
            <v-spacer />
            <a
              v-if="!$vuetify.breakpoint.mobile"
              class="text--primary text-h6 ml-auto align-self-center text-decoration-none"
              style="min-width: 180px"
              :href="contact.phone.link"
            >
              <span v-text="contact.phone.title" />
            </a>

            <v-app-bar-nav-icon
              v-if="$vuetify.breakpoint.mobile"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container fluid :style="{'min-height': appMain.minHeight}">
        <Nuxt />
      </v-container>

      <v-divider />

      <v-footer
        min-height="100"
        color="transparent"
      >
        <v-container>
          <v-row>
            <span>&copy; {{ new Date().getFullYear() }} {{ title }}</span>
          </v-row>
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

const linksList = [
  {
    name: 'Главная',
    to: '/'
  },
  {
    name: 'Услуги',
    to: '/services',
    children: [
      {
        name: 'Сайты',
        to: '/'
      },
      {
        name: 'Приложения',
        to: '/'
      }
    ]
  },
  {
    name: 'Связь с нами',
    to: '/contact'
  }
]

export default Vue.extend({
  name: 'Default',
  data: () => ({
    title: 'Nuxt Template',

    appBar: {
      width: 10, // max 12
      height: 82,

      logo: require('~/assets/image/logo.svg'),
      logoAlt: 'Логотип',

      links: linksList,

      styles: {
        background: 'rgba(255,255,255, .99)'
      }
    },
    appMain: {
      minHeight: '500px'
    },

    contact: {
      phone: {
        title: '+7 (964) 627 20 25',
        link: 'tel:+79646272025'
      }
    }
  })
})
</script>
