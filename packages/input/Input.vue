<template>
  <div class="aki-input"
    :style="{width: cwidth}">
    <div v-if="texts.includes(type)||dates.includes(type)"
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
    <div v-else-if="type=='radio'||type=='checkbox'"
      class="aki-input-selection">
      <input
        v-bind="$attrs"
        @focus="focus"
        @blur="blur($event.target)"
        @input="input($event.target)"
        :id="label"
        :type="type">
      <i><b></b></i>
      <label :class="{'aside': aside}" :for="label">{{label}}</label>
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
    full: Boolean,
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
      dates: ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'],
      aside: false,
    }
  },
  computed: {
    cwidth() {
      return this.full ? '100%' : this.width
    },
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
