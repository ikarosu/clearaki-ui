<template>
  <section v-if="full" v-show="visible" class="aki-dialog-full aki-page">
    <topbars nav="close" @nav-click="click" :fill="fill">
      {{title}}
      <span slot="action">
        <slot name="action"></slot>
      </span>
    </topbars>
    <transition name="aki-slide-top">
      <slot v-if="visible" name="header"></slot>
    </transition>
    <transition name="aki-fade-zoom">
    <main v-show="visible" class="aki-page-main" :class="pageClass">
      <slot></slot>
    </main>
    </transition>
    <transition name="aki-slide-bottom">
      <slot v-if="visible" name="footer"></slot>
    </transition>
  </section>
  <transition v-else name="aki-bgfade">
    <section v-show="visible"
      @click.self="click"
      class="aki-dialog">
      <transition name="aki-fade-zoom">
      <div v-show="visible" class="aki-dialog-layout"
        :class="{'aki-dialog-scroll':scroll}">
        <header v-if="$slots.header">
          <slot name="header"></slot>
        </header>
        <main>
          <slot></slot>
        </main>
        <footer v-if="$slots.footer">
          <slot name="footer"></slot>
        </footer>
      </div>
      </transition>
    </section>
  </transition>
</template>

<script>
import Topbars from '../topbars'
export default {
  name: 'AkiDialog',
  components: { Topbars },
  props: {
    scroll: {
      type: Boolean,
      default() { return false }
    },
    visible: {
      type: Boolean,
      default() { return false }
    },
    full: {
      type: Boolean,
      default() { return false }
    },
    title: String,
    pageClass: [Object, String, Array],
  },
  data() {
    return {
      fill: false,
    }
  },
  mounted() {
    if (this.$parent && this.$parent.$el.classList.contains('aki-page')) {
      const topbarsNode = this.$parent.$children.find(node => node.$el.classList.contains('aki-topbars'))
      if (topbarsNode) this.fill = topbarsNode.fill
    }
  },
  methods: {
    click() {
      this.$emit('update:visible', false)
      this.$emit('close')
    }
  }
}
</script>

