<template>
  <nav class="aki-tabs"
    :class="{'aki-tabs-scroll':scroll,
             'aki-tabs-fill':fill}">
    <div class="aki-tab-layout">
      <slot></slot>
      <div class="aki-tab-line" :style="{width, 'transform': `translateX(${offsetX}px)`}"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AkiTabs',
  model: {
    prop: 'active',
    event: 'toggle'
  },
  props: {
    active: {
      type: String,
      default: ''
    },
    fill: {
      type: Boolean,
      default() { return false }
    },
    scroll: {
      type: Boolean,
      default() { return false }
    }
  },
  data() {
    return {
      width: '90px',
      activeIndex: -1,
      offsetX: 0,
      defaultValueSet: false,
    }
  },
  watch: {
    activeIndex(index) {
      this.$nextTick()
        .then(() => {
          let x = 0
          this.$slots.default.every(({ componentInstance: vm }, i) => {
            if (i === index) return false
            x += vm.$el.clientWidth
            return true
          })
          const activeVm = this.$slots.default[index].componentInstance
          this.width = `${activeVm.$el.offsetWidth}px`
          this.offsetX = x
          this.$emit('toggle', activeVm.label)
        })
    },
    active: {
      immediate: true,
      async handler() {
        await this.$nextTick()
        this.defaultValueSet = true
        if (this.$slots.default)
          this.setActive()
        else
          this.defaultValueSet = false
      }
    }
  },
  mounted() {
    const nextNode = this.$el.nextElementSibling
    if (nextNode && nextNode.classList.contains('aki-page-main'))
      this.$el.classList.add('aki-shadow-bottom')
  },
  methods: {
    dispatch(label) {
      this.$emit('toggle', label)
    },
    setActive() {
      this.activeIndex = this.$slots.default.findIndex(({ componentInstance: vm }) => vm.active)
    }
  },
}
</script>
