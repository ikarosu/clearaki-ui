<template>
  <nav class="aki-toolbars">
    <main class="aki-toolbars-layout">
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
  },
  methods: {
    dispatch(label) {
      this.$emit('toggle', label)
    }
  },
}
</script>
