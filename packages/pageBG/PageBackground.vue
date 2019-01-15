<template>
  <section
    class="aki-page aki-page-background"
    :class="{'aki-page-background-opened':opened}"
  >
    <transition name="aki-slide-top">
      <slot
        v-if="!(hideTopbar && opened)"
        name="topbar"
      ></slot>
    </transition>
    <section
      ref="background"
      class="aki-background"
    >
      <slot name="background"></slot>
    </section>
    <div
      class="aki-page-background-layout"
      @mousedown="handleClose"
      @touchstart="handleClose"
    >
      <section>
        <header
          v-if="title"
          v-text="title"
          class="aki-background-header"
        ></header>
        <slot></slot>
      </section>
      <div class="aki-page-main-mask"></div>
    </div>
  </section>
</template>

<script>
import { getDOMRect } from '../../src/utils/dom'
export default {
  name: 'AkiPageBackground',
  props: {
    opened: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    hideTopbar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bgEl: null,
      h: 0
    }
  },
  watch: {
    opened(v) {
      if (v) this.bgEl.style.height = `${this.h}px`
      else this.bgEl.style.height = 0
    }
  },
  mounted() {
    this.bgEl = this.$refs.background
    this.reComputeHeight()
  },
  methods: {
    handleClose() {
      this.$emit('update:opened', false)
    },
    reComputeHeight() {
      this.h = getDOMRect(this.bgEl.cloneNode(true)).height
    }
  }
}
</script>
