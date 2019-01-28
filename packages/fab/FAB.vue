<template>
  <button
    v-on="$listeners"
    class="aki-fab"
    :class="[
      `aki-fab-${mini ? 'mini' : 'regular'}`,
      `aki-fab-${plain ? 'plain' : 'fill'}`,
      {'aki-fab-fixed': fixed.length},
    ]"
    :style="{ top, right, bottom, left }"
  >
    <Icon :icon="icon" />
  </button>
</template>

<script>
// import Button from '../button'
import Icon from '../icon'
export default {
  name: 'AkiFab',
  components: { Icon },
  props: {
    icon: {
      type: String,
      required: true
    },
    mini: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: String,
      default: ''
    }
  },
  computed: {
    position() {
      return this.fixed.split(',')
    },
    top() {
      const [v] = this.position
      return v && `${v}px`
    },
    right() {
      const [, v] = this.position
      return v && `${v}px`
    },
    bottom() {
      const [,, v] = this.position
      return v && `${v}px`
    },
    left() {
      const [,,, v] = this.position
      return v && `${v}px`
    },
  }
}
</script>
