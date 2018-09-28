<template>
  <button
    @click="click"
    class="aki-btn"
    :class="[
      `aki-btn-${type}`,
      `aki-btn-${size}`,
      {'aki-btn-round': round},
      {'aki-btn-circle': circle},
      {'aki-btn-full-width': full},
      {'aki-btn-plain': plain},
    ]">
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
      default() { return 'm' }
    },
    round: {
      type: Boolean,
      default() { return false }
    },
    circle: {
      type: Boolean,
      default() { return false }
    },
    full: {
      type: Boolean,
      default() { return false }
    },
    plain: {
      type: Boolean,
      default() { return false }
    },
  },
  methods: {
    click(e) {
      this.$emit('click', e)
    }
  }
}
</script>

