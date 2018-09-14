<template>
  <nav class="aki-toolbars">
    <main>
      <button>
        <slot></slot>
      </button>
    </main>
  </nav>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'AkiToolbars',
  model: {
    prop: 'values',
    event: 'change'
  },
  props: {
    full: Boolean,
    type: {
      type: String,
      default() { return 'text' }
    },
    types: {
      type: String,
      default() { return 'fill' }
    },
    label: {
      type: String,
      default() { return '选项' }
    },
    nobg: {
      type: Boolean,
      default() { return false }
    },
    width: {
      type: String,
      default() { return '170px' }
    },
    helper: {
      type: String
    },
    values: {},
  },
  computed: {
    cwidth() {
      return this.full ? '100%' : this.width
    },
  },
  methods: {
    change(target) {
      if (target.multiple) {
        const values = Array.from(target.options)
          .filter(opt => opt.selected)
          .map(opt => opt.value)
        this.$emit('change', values)
      } else {
        this.$emit('change', target.value)
      }
    }
  },
}
</script>
