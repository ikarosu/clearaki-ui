<template>
  <div class="aki-step" :class="states[state]&&`aki-step-${states[state]}`">
    <div class="aki-step-progress">
      <div class="aki-step-icon">
        <aki-icon :key="`${index}-icon`"
          v-if="state < 1"
          :icon="`numeric-${index + 1}-circle`"
        />
        <aki-icon key="check-icon" v-else icon="check-circle" />
        <div
          class="aki-step-line"
          :style="{width}"
        ></div>
      </div>
    </div>
    <p class="aki-step-desc">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'AkiStep',
  data() {
    return {
      index: -1,
      states: ['active', 'complete'],
      state: -1,
    }
  },
  computed: {
    width() {
      return `${this.$parent.progressWidth}px`
    }
  },
  beforeCreate() {
    this.$parent.children.push(this)
  },
  beforeDestroy() {
    const children = this.$parent.children
    const index = children.indexOf(this)
    if (index > -1) children.splice(index, 1)
  },
  mounted() {
    const unwatch = this.$watch('index', _ => {
      this.$watch('$parent.active', this.setState, { immediate: true })
      unwatch()
    })
  },
  methods: {
    setState(step) {
      if (this.index + 1 > step) this.state = -1
      else if (this.index + 1 === step) this.state = 0
      else this.state = 1
    }
  }
}
</script>
