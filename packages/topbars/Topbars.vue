<template>
  <header class="aki-topbars" :class="{'aki-topbars-fill':fill}">
    <div class="aki-topbar-nav" v-if="$slots.nav"><slot name="nav"></slot></div>
    <h1><slot>首页</slot></h1>
    <div class="aki-topbar-action" v-if="$slots.action"><slot name="action"></slot></div>
  </header>
</template>

<script>
export default {
  name: 'AkiTopbars',
  model: {
    prop: 'active',
    event: 'toggle'
  },
  props: {
    active: String,
    fill: {
      type: Boolean,
      default() { return false }
    },
    fixText: {
      type: Boolean,
      default() { return false }
    }
  },
  mounted() {
    const nextNode = this.$el.nextElementSibling
    if (nextNode.classList.contains('aki-page-main'))
      this.$el.classList.add('aki-shadow-bottom')
  },
  methods: {
    dispatch(label) {
      this.$emit('toggle', label)
    }
  },
}
</script>
