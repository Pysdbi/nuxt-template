<template>
  <client-only>
    <div class="bg-effect" :style="bgStyles" />
  </client-only>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BgEffect extends Vue {
  // Расположение эффекта
  // Первое значение - Вертикаль
  // Второе - Горизоталь
  @Prop({ type: String, default: '50% 50%' })
  readonly position!: string

  // Размер эффекта
  @Prop({ type: Number, default: 500 })
  readonly size!: number

  // Цвет эффекта
  @Prop({ type: String, default: '#aaa' })
  readonly color!: string

  // Прозрачность эффекта
  @Prop({ type: Number, default: 0.2 })
  readonly opacity!: number

  get bgStyles () {
    const pos = this.position.split(' ')

    return {
      top: !pos[0].includes('%') ? pos[0] + '%' : pos[0],
      left: !pos[1].includes('%') ? pos[1] + '%' : pos[1],
      width: this.size + 'px',
      height: this.size + 'px',
      background: this.color,
      opacity: this.opacity,
      boxShadow: `0 0 200px 150px ${this.color}`
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-effect {
  position: absolute;
  background: #bb6bd9;
  box-shadow: 0 0 200px 120px #bb6bd9;
  border-radius: 50%;
}
</style>
