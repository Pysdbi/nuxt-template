<template>
  <v-app>
    <v-app-bar
      fixed
      app
      elevate-on-scroll
      class="hidden-xs-and-down"
    >
      <v-toolbar-title
        class="d-flex align-center"
      >
        <a href="https://sdup.ru" style="height: 48px;">
          <img
            height="48"
            :src="require('~/assets/image/logo.svg')"
            alt="logotype sdup"
          >
        </a>
        <nuxt-link
          to="/"
          class="text-h4 text--secondary"
          style="text-decoration: none;"
        >
          ComplexWork
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        text
        depressed
        large
        to="/services/dashboard"
        class="mx-2"
      >
        Уже есть аккаунт?
      </v-btn>
      <v-btn
        depressed
        large
        color="primary"
        to="/registration"
      >
        Приступить здесь
      </v-btn>
    </v-app-bar>

    <v-app-bar
      fixed
      app
      elevate-on-scroll
      class="hidden-sm-and-up py-5"
      extended
    >
      <v-toolbar-title
        class="d-flex flex-column justify-center"
      >
        <a href="https://sdup.ru" style="height: 48px;">
          <img
            height="48"
            :src="require('~/assets/image/logo.svg')"
            alt="logotype sdup"
          >
        </a>
        <nuxt-link
          to="/"
          class="text-h4 text--secondary ml-1"
          style="text-decoration: none;"
        >
          ComplexWork
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer />

      <v-dialog
        v-model="dialog"
        fullscreen
        transition="dialog-top-transition"
        hide-overlay
      >
        <template
          #activator="{ on, attrs }"
        >
          <v-app-bar-nav-icon
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <v-card>
          <v-toolbar>
            <v-toolbar-title
              class="d-flex align-center"
            >
              <a href="https://sdup.ru" style="height: 48px;">
                <img
                  height="48"
                  :src="require('~/assets/image/logo.svg')"
                  alt="logotype sdup"
                >
              </a>
              <nuxt-link
                to="/"
                class="text-h4 text--secondary"
                style="text-decoration: none;"
              >
                ComplexWork
              </nuxt-link>
            </v-toolbar-title>

            <v-spacer />

            <v-btn
              icon
              @click.native="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>

          <div class="d-flex flex-column justify-space-between">
            <v-btn
              depressed
              block
              x-large
              color="primary"
              to="/registration"
              @click="dialog = false"
            >
              Начать здесь
            </v-btn>
            <v-btn
              text
              block
              depressed
              x-large
              to="/services/dashboard"
              class="mx-2"
              @click="dialog = false"
            >
              Уже есть аккаунт?
            </v-btn>
          </div>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer
      app
      absolute
    >
      <v-container>
        <v-row
          align="center"
          justify="center"
          class="my-5"
        >
          <v-col
            md="4"
            cols="12"
            class="d-flex justify-md-start justify-center"
          >
            <img
              style="filter: grayscale(100%);"
              height="64"
              :src="require('~/assets/image/logo.svg')"
              alt="logotype sdup"
            >
          </v-col>
          <v-col
            md="4"
            cols="12"
            class="d-flex justify-center"
          >
            <v-btn
              v-for="(item, ind) in socnet"
              :key="ind"
              class="ma-2"
              :href="item.href"
              depressed
              icon
            >
              <v-icon
                size="32"
                v-text="item.img"
              />
            </v-btn>
          </v-col>
          <v-col
            md="4"
            cols="12"
            class="d-flex justify-md-end justify-center"
          >
            <v-list
              dense
              color="transparent"
              width="220"
            >
              <v-list-item-group>
                <v-list-item
                  v-for="(item, ind) in contacts"
                  :key="ind"
                  :href="item.href"
                  :title="item.text"
                >
                  <v-list-item-icon>
                    <v-icon
                      size="32"
                      v-text="item.img"
                    />
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text" />
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
        <v-divider />
        <v-row
          class="my-5"
          align="center"
        >
          <v-col class="d-flex justify-center">
            &copy; {{ new Date().getFullYear() }} {{ process }}
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'App'
})
</script>

<style lang="scss" scoped>

</style>
