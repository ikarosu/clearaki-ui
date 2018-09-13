<template>
  <button
  class="aki-btn"
  :class="[`aki-btn-${type}`, {'aki-btn-dense': size=='dense'}]"
  :style="{width:cwidth}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AkiButton',
  props: {
    type: {
      type: String,
      default() { return 'unelevate' }
    },
    size: {
      type: String,
      default() { return 'middle' }
    },
    full: Boolean,
  },
  computed: {
    cwidth() {
      return this.full ? '100%' : 'auto'
    }
  },
}
</script>

