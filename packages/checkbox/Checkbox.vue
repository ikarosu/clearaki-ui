<template>
  <div class="aki-input"
    :style="{width: cwidth}">
    <div class="aki-input-selection">
      <input type="checkbox"
        :name="$attrs.name"
        @change="check($event.target)"
        :value="value"
        :checked="checked"
        :id="label">
      <i @click="$refs.label.click()"><b></b></i>
      <label ref="label" :for="label">{{label}}</label>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'AkiCheckbox',
  model: {
    prop: 'valuex',
    event: 'change',
  },
  props: {
    full: Boolean,
    label: {
      type: String,
      default() { return '选项' }
    },
    width: {
      type: String,
      default() { return '170px' }
    },
    value: String,
    valuex: Array,
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
        this.checked = v.includes(this.value)
      }
    }
  },
  methods: {
    check() {
      const boxs = this.$parent.$el.querySelectorAll(`[name=${this.$attrs.name}]`)
      this.$emit('change',
        Array.from(boxs)
          .filter(d => d.checked)
          .map(d => d.value)
      )
    },
  },
}
</script>
