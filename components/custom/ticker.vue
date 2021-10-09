<template>
  <div
    class="ticker"
  >
    <div
      v-for="(_, _tickerItemsInd) in repeatItems"
      :key="_tickerItemsInd"
    >
      <div
        class="ticker__list"
        :style="getAnimationForList"
      >
        <div
          v-for="(item, ind) in items"
          :key="ind"
          class="ticker__item"
          :style="getStylesForItem"
        >
          <img
            v-if="item.source"
            :width="itemWidth"
            :height="itemHeight"
            :src="item.source"
            alt=""
          >
          <template v-else>
            {{ item.label }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

export interface EnumTickerItem {
  label: string,
  source: string
}

export interface EnumTickerItems extends Array<EnumTickerItem> {
}

@Component
export default class Ticker extends Vue {
  // Список элементов прокручивания
  @Prop({
    type: Array,
    required: true
  })
  readonly items!: EnumTickerItems

  // Скорость прокрутки
  @Prop({
    type: String,
    required: false,
    default: 15
  })
  readonly duration!: number

  // Количество повторений списка элементов
  @Prop({
    type: Number,
    required: false,
    default: 2
  })
  readonly repeatItems!: number

  // Styles
  // Ширина карточки
  @Prop({
    type: Number,
    required: false,
    default: 150
  })
  readonly itemWidth!: number

  // Высота карточки
  @Prop({
    type: Number,
    required: false,
    default: 150
  })
  readonly itemHeight!: number

  // Цвет карточки
  @Prop({
    type: String,
    required: false,
    default: 'transparent'
  })
  readonly color!: string

  get getAnimationForList (): Object {
    return {
      animation: `ticker ${this.duration * 2}s infinite linear`
    }
  }

  getStylesForItem (): Object {
    return {
      width: this.itemWidth + 'px',
      height: this.itemHeight + 'px',
      background: this.color
    }
  }
}
</script>

<style lang="scss">
.ticker {
  width: 100%;
  overflow: hidden;
  display: flex;
  min-height: 64px;

  &__list {
    display: flex;
  }

  &__item {
    min-height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;

    img {
      border-radius: 4px;
      border: .1rem dashed #bababa;
    }
  }

  @keyframes ticker {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-200%);
    }
  }
}
</style>
