<template>
  <button
    @click="click"
    :badge="badge"
    class="aki-btn"
    :class="[
      `aki-btn-${type}`,
      `aki-btn-${size}`,
      {'aki-btn-round': round},
      {'aki-btn-circle': circle},
      {'aki-btn-full-width': full},
      {'aki-btn-plain': plain},
      {'aki-btn-loading': loading},
      {'aki-badge': badge !== false},
      {'aki-badge-dot':badge===true},
  ]">
    <aki-progress v-if="loading" width="24" stroke="2" loading></aki-progress>
    <slot v-else></slot>
  </button>
</template>

<script>
import Progress from '../progress/Progress'
export default {
  name: 'AkiButton',
  components: { 'AkiProgress': Progress },
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
    loading: {
      type: Boolean,
      default() { return false }
    },
    badge: {
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

