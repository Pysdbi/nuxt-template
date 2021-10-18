<template>
  <v-row justify="center" class="d-flex flex-row-reverse">
    <v-col
      cols="12"
      md="6"
    >
      <slot name="image">
        <v-img
          v-if="image"
          contain
          :src="image"
        />
        <v-card
          v-else
          width="100%"
          height="400px"
          elevation="0"
          class="d-flex align-center justify-center text--secondary text-h4"
          :style="{border: '.17rem dashed' + $vuetify.theme.themes.light.primary, background: 'transparent'}"
        >
          Картинка
        </v-card>
      </slot>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-row justify="center">
        <v-col cols="2" class="d-flex justify-center align-start">
          <slot name="icon">
            <v-icon
              x-large
              :color="appendIconColor"
              v-text="appendIcon"
            />
          </slot>
        </v-col>
        <v-col cols="8">
          <h2
            class="text-h4 text--primary"
            :class="cardTitleClass"
            v-text="cardTitle"
          />
          <p
            class="text--secondary"
            :class="cardContentClass"
            v-html="cardContent"
          />
          <slot name="button">
            <v-btn
              :color="buttonColor"
              outlined
              large
            >
              {{ buttonContent }}
            </v-btn>
          </slot>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CardService extends Vue {
  @Prop({ type: String, required: false, default: 'Заголовок' })
  readonly alt!: string

  @Prop({ type: String, required: false, default: 'Заголовок' })
  readonly imageCols!: string

  @Prop({ type: String, required: false, default: 'Заголовок' })
  readonly contentCols!: string

  // Заголовок карточки
  @Prop({ type: String, required: false, default: 'Заголовок' })
  readonly cardTitle!: string

  @Prop({ type: String, required: false, default: '' })
  readonly cardTitleClass!: string | []

  // Содержимое карточки
  @Prop({ type: String, required: false, default: 'Содержимое карточки услуги' })
  readonly cardContent!: string

  @Prop({ type: String, required: false, default: '' })
  readonly cardContentClass!: string | []

  // Картинка карточки
  @Prop({ type: String, required: false, default: null })
  readonly image!: string

  // Маленькая иконка
  @Prop({ type: String, required: false, default: 'mdi-information' })
  readonly appendIcon!: string

  @Prop({ type: String, required: false, default: 'info' })
  readonly appendIconColor!: string

  // Кнопка
  @Prop({ type: String, required: false, default: 'Подробнее' })
  readonly buttonContent!: string

  @Prop({ type: String, required: false, default: '/' })
  readonly buttonHref!: string

  @Prop({ type: String, required: false, default: 'info' })
  readonly buttonColor!: string
}
</script>

<style lang="scss" scoped>

</style>
