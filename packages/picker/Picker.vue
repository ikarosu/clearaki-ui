<template>
  <div class="aki-picker">
    <div class="aki-picker-board">
      <p @click.stop="handlePre"></p>
      <p></p>
      <p @click.stop="handleNext"></p>
    </div>
    <ul ref="options" class="aki-picker-options">
      <li></li>
      <slot></slot>
      <li></li>
    </ul>
  </div>
</template>

<script>
const H = 56
const A = 0.01
export default {
  name: 'AkiPicker',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number],
      default() { return '' }
    },
  },
  data() {
    return {
      finger: {
        startY: 0,
        startTime: 0,
        moveY: 0,
        moveTime: 0,
        endY: 0,
        endTime: 0,
        scroll: 0,
        transformY: 0,
      },
    }
  },
  computed: {
    maxHeight() {
      return (this.$refs.options.children.length - 3) * H
    }
  },
  watch: {
    async value(v) {
      await this.$nextTick()
      let index = Array.from(this.$refs.options.children).findIndex(el => el.value === v) - 1
      if (index < 0) index = 0
      this.finger.transformY = -H * index
      this.finger.scroll = this.finger.transformY
      this.setTransform()
    }
  },
  mounted() {
    // 如果默认值为空，将为-1
    let index = Array.from(this.$refs.options.children).findIndex(el => el.value === this.value) - 1
    if (index < -1) index = -1
    this.finger.transformY = -H * index
    this.finger.scroll = this.finger.transformY
    this.setTransform()

    this.$el.addEventListener('touchstart', e => {
      const touch = e.changedTouches[0]
      this.finger.startY = touch.pageY
      this.finger.startTime = e.timeStamp
    })
    this.$el.addEventListener('touchmove', e => {
      e.preventDefault()
      const touch = e.changedTouches[0]
      this.finger.moveY = touch.pageY
      this.finger.moveTime = e.timeStamp
      const move = this.finger.moveY - this.finger.startY
      // this.finger.scroll为上次滚动距离
      const scroll = move + this.finger.scroll
      this.setTransform(scroll)
      // 本次移动后的位置，将在松手后赋给this.finger.scroll
      this.finger.transformY = scroll
    })
    this.$el.addEventListener('touchend', e => {
      const touch = e.changedTouches[0]
      this.finger.endY = touch.pageY
      if (this.finger.startY === this.finger.endY) return
      this.finger.endTime = e.timeStamp
      // 满足条件才计算惯性
      if (this.finger.endTime - this.finger.moveTime < 300
        && Math.abs(this.finger.endY - this.finger.startY) > 100) {
        const f = this.finger
        const speed = (f.endY - f.startY) / (f.moveTime - f.startTime)
        const t = -Math.abs(speed) / A
        this.finger.transformY = -speed * t + this.finger.scroll
      }
      // 最小值限制
      if (this.finger.transformY > 0) this.finger.transformY = 0
      // 最大值限制
      if (this.finger.transformY < -this.maxHeight) this.finger.transformY = -this.maxHeight
      // 偏移修正-超过一半算下一张
      if (-this.finger.transformY % H > H / 2) {
        this.finger.transformY -= H
      }
      // 偏移修正-自动对齐
      this.finger.transformY = this.finger.transformY - this.finger.transformY % H
      // 设置样式
      this.setTransform(this.finger.transformY)
      // 只有实际改变了才抛出事件
      if (this.finger.transformY !== this.finger.scroll) {
        this.emit()
        // 将本次位置作为滚动位置，在下次move时作为定值
        this.finger.scroll = this.finger.transformY
      }
    })
  },
  methods: {
    handlePre() {
      if (this.finger.transformY === 0) return
      this.finger.transformY += H
      this.setTransform(this.finger.transformY)
      this.emit()
      this.finger.scroll = this.finger.transformY
    },
    handleNext() {
      if (this.finger.transformY === -this.maxHeight) return
      this.finger.transformY -= H
      this.setTransform(this.finger.transformY)
      this.emit()
      this.finger.scroll = this.finger.transformY
    },
    setTransform(Y = this.finger.transformY) {
      this.$refs.options.style.transform = `translateY(${Y}px)`
    },
    emit() {
      this.$emit('change', this.$refs.options.children[-this.finger.transformY / H + 1].value)
    }
  }
}
</script>
