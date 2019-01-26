<template>
  <section class="aki-steps">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'AkiSteps',
  props: {
    active: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      children: [],
      wrapWidth: 0,
    }
  },
  computed: {
    childCount() {
      return this.children.length
    },
    progressWidth() {
      return (this.wrapWidth - 48 * this.childCount) / this.childCount
    }
  },
  watch: {
    children(v) {
      v.forEach((step, index) => {
        step.index = index
      })
    }
  },
  mounted() {
    this.wrapWidth = this.$el.offsetWidth
  }
}
</script>
