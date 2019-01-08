<template>
  <section class="aki-switch-wrap" :class="{'aki-switch-opened': actived}">
    <slot></slot>
    <div class="aki-switch-bar-layout" @click="handleChange">
      <div class="aki-switch-bar"></div>
    </div>
    <slot name="helper"></slot>
  </section>
</template>

<script>
export default {
  name: 'AkiSwitch',
  model: {
    prop: 'actived',
    event: 'change'
  },
  props: {
    actived: {
      type: Boolean,
      default() { return false }
    }
  },
  methods: {
    handleChange() {
      this.$emit('change', !this.actived)
    }
  }
}
</script>
