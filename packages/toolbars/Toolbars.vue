<template>
  <nav class="aki-toolbars" :class="{'aki-toolbars-fill':fill}">
    <div class="aki-toolbar-layout">
      <slot></slot>
    </div>
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
    active: {
      type: String,
      default: ''
    },
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
