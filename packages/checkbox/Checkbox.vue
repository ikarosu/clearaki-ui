<template>
  <div class="aki-input"
    :style="{width: cwidth}">
    <div class="aki-input-selection" :class="{'aki-chip':chip, 'aki-chip-active':chip&&checked}">
      <input type="checkbox"
        :name="$attrs.name"
        @change="check($event.target)"
        :value="value"
        :checked="checked"
        :id="`aki-box-${label}`">
      <i v-if="!chip" @click="$refs.label.click()"><b></b></i>
      <div v-if="$slots.default" class="aki-input-slot"><slot></slot></div>
      <label ref="label" :for="`aki-box-${label}`">{{ label }}</label>
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
    full: {
      type: Boolean,
      default() { return false }
    },
    chip: {
      type: Boolean,
      default() { return false }
    },
    label: {
      required: true,
      type: String,
    },
    width: {
      type: String,
      default: '170px',
    },
    value: {
      required: true,
      type: [String, Number],
    },
    valuex: {
      type: Array,
      default() { return [] }
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
        this.checked = v.includes(this.value)
      }
    }
  },
  methods: {
    check() {
      this.checked = !this.checked
      const boxs = this.$parent.$children.filter(node => node.$vnode.tag.includes('AkiCheckbox') && node.$attrs.name === this.$attrs.name)
      this.$emit('change',
        boxs.filter(d => d.checked)
          .map(d => d.value)
      )
    },
  },
}
</script>
