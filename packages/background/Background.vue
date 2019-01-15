<template>
  <section class="aki-background"><slot></slot></section>
</template>

<script>
import { getDOMRect } from '../../src/utils/dom'
export default {
  name: 'AkiBackground',
  props: {
    opened: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      h: 0,
    }
  },
  watch: {
    opened(v) {
      if (v) this.$el.style.height = `${this.h}px`
      else this.$el.style.height = 0
    },
  },
  mounted() {
    this.h = getDOMRect(this.$el.cloneNode(true)).height
  },
}
</script>
