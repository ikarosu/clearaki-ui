<template>
  <transition name="aki-bgfade">
  <section v-show="visible"
    @click.self="click"
    class="aki-bottom-sheet">
    <transition name="aki-slide-bottom">
    <div v-show="visible" class="aki-bottom-sheet-layout"
      :class="{'aki-bottom-sheet-scroll':scroll}">
      <header v-if="title">{{title}}</header>
      <main>
        <slot></slot>
      </main>
      <slot name="custom"></slot>
    </div>
    </transition>
  </section>
  </transition>
</template>

<script>
export default {
  name: 'AkiSheetBottom',
  props: {
    scroll: {
      type: Boolean,
      default() { return false }
    },
    visible: {
      type: Boolean,
      default() { return false }
    },
    title: String,
  },
  data() {
    return {
      display: false
    }
  },
  watch: {
    visible(state) {
      if (state) {
        this.display = state
      } else {
        setTimeout(() => {
          this.display = state
        }, 280)
      }
    }
  },
  methods: {
    click() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

