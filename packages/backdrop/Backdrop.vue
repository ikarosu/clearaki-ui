<template>
  <section
    class="aki-page aki-page-backdrop"
    :class="{'aki-page-backdrop-opened':visible}"
  >
    <transition name="aki-slide-top">
      <slot
        v-if="!(hideTopbar && visible)"
        name="topbar"
      ></slot>
    </transition>
    <aki-transition>
      <section
        class="aki-backdrop aki-dropdown"
        v-show="visible"
      >
        <slot name="backdrop"></slot>
      </section>
    </aki-transition>
    <div
      class="aki-page-backdrop-layout"
      @click="handleClose"
    >
      <section>
        <header
          v-if="title"
          v-text="title"
          class="aki-backdrop-header"
        ></header>
        <slot></slot>
      </section>
      <div class="aki-page-main-mask"></div>
    </div>
  </section>
</template>

<script>
import AkiTransition from '../dropdown/Transition'
export default {
  name: 'AkiBackdrop',
  components: { AkiTransition },
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
  watch: {
    visible(v) {
      if (v) {
        this.$emit('opened')
        this.$emit('visibleChanged', true)
      } else {
        this.$emit('closed')
        this.$emit('visibleChanged', false)
      }
    }
  },
  methods: {
    handleClose() {
      if (this.visible === true) this.$emit('update:visible', false)
    }
  }
}
</script>
