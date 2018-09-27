<template>
  <nav class="aki-toolbars" :class="{'aki-toobars-fill':fill}">
    <main class="aki-toolbar-layout">
      <slot></slot>
    </main>
  </nav>
</template>

<script>
export default {
  name: 'AkiToolbars',
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
  methods: {
    dispatch(label) {
      this.$emit('toggle', label)
    }
  },
}
</script>
