<template>
  <div class="aki-input"
    :style="{width}">
    <div class="aki-input-main"
      :class="[`aki-input-${types}`, {'aki-input-bgnone': nobg}]">
      <select
        :id="label"
        v-bind="$attrs"
        @change="change($event.target)">
        <slot></slot>
      </select>
      <label class="aside" :for="label">{{label}}</label>
      <div class="line"></div>
    </div>
    <p v-if="helper">{{helper}}</p>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'AkiSelect',
  model: {
    prop: 'values',
    event: 'change'
  },
  props: {
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
