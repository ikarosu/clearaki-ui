<template>
  <section
    v-show="display"
    @click.self="hide"
    @touchstart.self="hide"
    @touchstart.stop
    class="aki-context-wrap"
  >
    <transition name="aki-fade-zoom">
      <div
        @click="hide"
        v-show="visible"
        class="aki-context-layout"
        :style="{top, right}"
      >
        <slot></slot>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AkiContextMenu',
  props: {
    scroll: {
      type: Boolean,
      default() {
        return false
      }
    },
    title: String
  },
  data() {
    return {
      display: false,
      visible: false,
      top: 0,
      right: 0,
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
  mounted() {
    document.body.appendChild(this.$el)
  },
  methods: {
    hide() {
      this.visible = false
    }
  }
}
</script>

