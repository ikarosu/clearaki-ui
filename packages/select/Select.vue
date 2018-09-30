<template>
  <div class="aki-input"
    :style="{width: cwidth}">
    <div class="aki-input-main"
      :class="[outline ? 'aki-input-outline':'aki-input-fill', {'aki-input-bgnone': nobg}]">
      <select
        :id="label"
        :value="values"
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
  name: 'AkiSelect',
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
        // 多选的时候返回一个算中的数组
        // 默认是最后选中的值
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
