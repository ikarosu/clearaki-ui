<template>
  <div class="aki-input"
    :style="{width: cwidth}">
    <div class="aki-input-selection">
      <input type="radio"
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
  name: 'AkiRadio',
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
    valuex: String,
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
      // if (this.type === 'radio')
      // else {
      //   const boxs = this.$parent.$el.querySelectorAll(`[name=${this.$attrs.name}]`)
      //   this.$emit('input',
      //     Array.from(boxs)
      //       .filter(d => d.checked)
      //       .map(d => d.value)
      //   )
      // }
    },
  },
}
</script>
