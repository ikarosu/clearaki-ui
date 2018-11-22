<template>
  <div class="aki-input"
    :style="{width: cwidth}">
    <div v-if="texts.includes(type)||dates.includes(type)"
      class="aki-input-main"
      :class="[outline ? 'aki-input-outline':'aki-input-fill' , {'aki-input-bgnone': nobg}]">
      <input
        v-bind="$attrs"
        @focus="focus"
        @blur="blur($event.target)"
        @input="input($event.target)"
        :id="label"
        :type="type"
        :value="value">
      <label :class="{'aside': aside}" :for="label">{{label}}</label>
      <div class="line"></div>
    </div>
    <p v-if="helper">{{helper}}</p>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'AkiInput',
  props: {
    type: {
      type: String,
      default() { return 'text' }
    },
    full: Boolean,
    outline: {
      type: Boolean,
      default() { return false }
    },
    label: {
      require: true,
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
    value: {
      type: [String, Array],
      default() { return '' }
    },
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
  mounted() {
    if (this.value.length > 0) this.aside = true
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
