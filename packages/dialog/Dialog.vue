<template>
  <section v-if="display"
    @click.self="click"
    class="aki-dialog">
    <transition name="aki-snackbars">
    <div v-if="visible"
      class="aki-dialog-layout"
      :class="{'aki-dialog-scroll':scroll}">
      <header v-if="$slots.header">
        <slot name="header"></slot>
      </header>
      <main @touchmove.stop>
        <slot></slot>
      </main>
      <footer v-if="$slots.footer">
        <slot name="footer"></slot>
      </footer>
    </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AkiDialog',
  props: {
    scroll: {
      type: Boolean,
      default() { return false }
    },
    visible: {
      type: Boolean,
      default() { return false }
    }
  },
  data() {
    return {
      display: this.visible,
    }
  },
  watch: {
    visible(state) {
      this.display = state
    }
  },
  methods: {
    click() {
      this.display = false
    }
  }
}
</script>

