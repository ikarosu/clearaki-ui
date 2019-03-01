<template>
  <section v-if="full" v-show="visible" class="aki-dialog-full aki-page">
    <topbar nav="close" @nav-click="click" :fill="fill">
      {{ title }}
      <span slot="action">
        <slot name="action"></slot>
      </span>
    </topbar>
    <transition name="aki-slide-top">
      <slot v-if="visible" name="header"></slot>
    </transition>
    <transition name="aki-fade-zoom">
      <div v-show="visible" class="aki-dialog-main aki-page-main" :class="pageClass">
        <slot></slot>
      </div>
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
          <div class="aki-dialog-main" :class="pageClass">
            <slot></slot>
          </div>
          <footer v-if="$slots.footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </transition>
    </section>
  </transition>
</template>

<script>
import topbar from '../topbar'
export default {
  name: 'AkiDialog',
  components: { topbar },
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
    title: {
      type: String,
      default: '提示'
    },
    pageClass: {
      type: [Object, String, Array],
      default() { return '' }
    },
  },
  data() {
    return {
      fill: false,
    }
  },
  async mounted() {
    if (this.full) document.body.appendChild(this.$el)
    const findPage = el => {
      if (el && el.$el.classList.contains('aki-page')) return el
      else return findPage(el.$parent)
    }
    const el = findPage(this.$parent)
    await this.$nextTick()
    const topbarNode = el.$children.find(node => node.$el.classList.contains('aki-topbar'))
    if (topbarNode) this.fill = topbarNode.fill
  },
  methods: {
    click() {
      this.$emit('update:visible', false)
      this.$emit('close')
    }
  }
}
</script>

