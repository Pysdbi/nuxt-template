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
                class="text-h6 text-md-h5 text--primary font-weight-bold d-flex align-center justify-start text-decoration-none"
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
              <v-menu
                v-for="(link, i) in appBar.links"
                :key="i"
                open-on-hover
                offset-y
                rounded="b-md t-0"
                nudge-top="2"
                nudge-left="2"
              >
                <template #activator="{ on, attrs }">
                  <v-tab
                    :to="link.to"
                    router
                    exact
                    link
                    v-bind="attrs"
                    v-on="on"
                  >
                    <div>
                      {{ link.name }}
                      <v-icon v-if="link.children">
                        mdi-chevron-down
                      </v-icon>
                    </div>
                  </v-tab>
                </template>

                <v-list v-if="link.children">
                  <v-list-item
                    v-for="(item, index) in link.children"
                    :key="index"
                    :to="item.to"
                  >
                    <v-list-item-title v-text="item.name" />
                  </v-list-item>
                </v-list>
              </v-menu>
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
        color="transparent"
      >
        <v-container
          :style="{minHeight: appFooter.minHeight}"
          class="d-flex align-center"
        >
          <v-row justify="center">
            <v-col
              cols="12"
              md="4"
              lg="3"
              class="text--primary font-weight-bold d-flex justify-center"
            >
              {{ title }}
            </v-col>
            <v-col
              cols="12"
              md="4"
              lg="3"
              class="text-center"
            >
              <span>&copy; {{ new Date().getFullYear() }} {{ title }}.  Все права сохранены.</span>
            </v-col>
            <v-col
              cols="10"
              md="6"
              lg="3"
              class="d-flex flex-column"
            >
              <a
                class="mb-2 text--primary"
                :href="contact.phone.link"
                v-text="contact.phone.title"
              />
              <a
                class="mb-2 text--primary"
                :href="contact.email.link"
                v-text="contact.email.title"
              />
              <div
                class="mb-2 text--primary text-body-2"
                v-html="contact.address.title"
              />
              <div
                class="mb-2 text--primary"
                v-html="contact.company.name"
              />
              <div
                class="mb-2 text--primary text-body-2"
                v-html="contact.company.data"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

interface EnumLinkItem {
  name: string,
  to: string,
  children: Array<EnumLinkItem>
}

interface EnumLinkItems extends Array<EnumLinkItem> {
}

const linksList: EnumLinkItems = [
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
        to: '/services/sites'
      },
      {
        name: 'Приложения',
        to: '/services/applications'
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
      },
      email: {
        title: 'sdup@sdup.ru',
        link: 'mailto:sdup@sdup.ru'
      },
      address: {
        title: '<b>103274</b>, г. Москва, Краснопресненская Набережная, 2'
      },
      company: {
        name: 'ООО <b>"SDup"</b>',
        data: 'ОГРН <b>1199944477788</b>, ИНН <b>1111111111</b>'
      }
    },

    appFooter: {
      width: 8, // max 12
      minHeight: '350px'
    }
  })
})
</script>
