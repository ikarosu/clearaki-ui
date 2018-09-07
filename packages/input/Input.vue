<template>
  <div class="aki-input"
        :style="{width}">
    <div v-if="texts.includes(type)"
      class="aki-input-main"
      :class="[`aki-input-${types}`, {'aki-input-bgnone': nobg}]">
      <input
        v-bind="$attrs"
        @focus="focus"
        @blur="blur($event.target)"
        @input="input($event.target)"
        :id="label"
        :type="type">
      <label :class="{'aside': aside}" :for="label">{{label}}</label>
      <div class="line"></div>
    </div>
    <p v-if="helper">{{helper}}</p>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input'
  },
  name: 'AkiInput',
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
      default() { return '在这里填写' }
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
    value: String,
  },
  data() {
    return {
      texts: ['text', 'password', 'email', 'number', 'search', 'tel', 'url'],
      aside: false,
    }
  },
  methods: {
    focus() {
      this.aside = true
    },
    blur({ value }) {
      if (!value) this.aside = false
    },
    input({ value }) {
      this.$emit('input', value)
    },
  },
}
</script>
