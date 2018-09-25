<template>
  <button
    @click="click"
    class="aki-btn"
    :class="[`aki-btn-${type}`, {'aki-btn-small': size=='small'}]"
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
      default() { return 'text' }
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
  methods: {
    click(e) {
      this.$emit('click', e)
    }
  }
}
</script>

