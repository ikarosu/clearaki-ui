<template>
  <div class="aki-input"
    :style="{width: cwidth}">
    <div class="aki-input-selection">
      <input type="radio"
        :name="$attrs.name"
        @change="check($event.target)"
        :value="value"
        :checked="checked"
        :id="`aki-radio-${label}`">
      <i @click="$refs.label.click()"><b></b></i>
      <label ref="label" :for="`aki-radio-${label}`">{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'AkiRadio',
  model: {
    prop: 'valuex',
    event: 'change',
  },
  props: {
    full: {
      type: Boolean,
      default() { return false }
    },
    label: {
      required: true,
      type: String,
    },
    width: {
      type: String,
      default() { return '170px' }
    },
    value: {
      required: true,
      type: [String, Number],
    },
    valuex: {
      type: [String, Number],
      default() { return '' }
    },
  },
  data() {
    return {
      checked: false,
    }
  },
  computed: {
    cwidth() {
      return this.full ? '100%' : this.width
    },
  },
  watch: {
    valuex: {
      immediate: true,
      handler(v) {
        this.checked = v === this.value
      }
    }
  },
  methods: {
    check() {
      this.$emit('change', this.value)
    },
  },
}
</script>
