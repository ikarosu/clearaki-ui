<template>
  <svg class="aki-progress" :class="{loading}" :viewBox="box" :width="width">
    <circle :stroke-dasharray="dash" :cx="r" :cy="r" :r="r - 4" fill="none" :stroke-width="stroke"></circle>
  </svg>
</template>

<script>
export default {
  name: 'AkiProgress',
  props: {
    width: {
      type: [Number, String],
      default() { return 48 }
    },
    stroke: {
      type: [Number, String],
      default() { return 4 }
    },
    loading: {
      type: Boolean,
      default() { return false }
    },
    progress: {
      type: Number,
      default() { return 0 }
    }
  },
  computed: {
    r() {
      return this.width / 2
    },
    box() {
      return `0 0 ${this.width} ${this.width}`
    },
    dash() {
      return `${this.progress * 1.25}, 125`
    }
  }
}
</script>
