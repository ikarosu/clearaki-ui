<template>
  <section
    class="aki-page aki-page-background"
    :class="{'aki-page-background-opened':visible}"
  >
    <transition name="aki-slide-top">
      <slot
        v-if="!(hideTopbar && visible)"
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
      @click="handleClose"
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
    visible: {
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
    visible(v) {
      if (v) {
        this.bgEl.style.height = `${this.h}px`
        this.$emit('opened')
        this.$emit('visibleChanged', true)
      } else {
        this.bgEl.style.height = 0
        this.$emit('closed')
        this.$emit('visibleChanged', false)
      }
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
