<template>
  <header class="aki-topbar" :class="{'aki-topbar-fill':fill}">
    <div class="aki-topbar-nav" v-if="$slots.nav"><slot name="nav"></slot></div>
    <icon v-else-if="nav" :icon="icon[nav]" @click="handleNav"></icon>
    <h1><slot>首页</slot></h1>
    <div class="aki-topbar-action" v-if="$slots.action"><slot name="action"></slot></div>
  </header>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'AkiTopbar',
  components: { Icon },
  props: {
    fill: {
      type: Boolean,
      default() { return false }
    },
    nav: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      icon: {
        back: 'arrow-left',
        menu: 'menu',
        close: 'close',
      }
    }
  },
  mounted() {
    const parentNode = this.$el.parentNode
    if (parentNode && parentNode.classList.contains('aki-page-background'))
      return false
    const nextNode = this.$el.nextElementSibling
    if (nextNode && !nextNode.classList.contains('aki-tabs'))
      this.$el.classList.add('aki-shadow-bottom')
  },
  methods: {
    handleNav() {
      this.$emit('nav-click', this.nav)
    }
  },
}
</script>
