<template>
  <div class="aki-input"
    :style="{width: cwidth}">
    <div class="aki-input-main"
      :class="[outline ? 'aki-input-outline':'aki-input-fill', {'aki-input-bgnone': nobg}]">
      <select ref="input"
        v-bind="$attrs"
        :id="label"
        @change="change($event.target)">
        <slot></slot>
      </select>
      <label class="aside" :for="label">{{ label }}</label>
      <div class="line"></div>
    </div>
    <p v-if="helper">{{ helper }}</p>
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
    full: {
      type: Boolean,
      default() { return false }
    },
    type: {
      type: String,
      default() { return 'text' }
    },
    outline: {
      type: Boolean,
      default() { return false }
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
      type: String,
      default: ''
    },
    values: {
      type: [String, Number],
      default: ''
    },
  },
  computed: {
    cwidth() {
      return this.full ? '100%' : this.width
    },
  },
  watch: {
    // 手动设置选中值
    // 因为多选框选中多个会变成选中0个
    values(v) {
      if (typeof v === 'object') {
        for (const option of this.$refs.input.children) {
          option.selected = v.includes(option.value)
        }
      } else {
        for (const option of this.$refs.input.children) {
          option.selected = v === option.value
        }
      }
    }
  },
  methods: {
    change(target) {
      if (target.multiple) {
        // 多选的时候返回一个算中的数组
        // 默认是最后选中的值
        const values = Array.from(target.selectedOptions)
          .map(opt => opt.value)
        this.$emit('change', values)
      } else {
        this.$emit('change', target.value)
      }
    }
  },
}
</script>
