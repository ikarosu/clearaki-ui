<template>
  <div class="aki-toolbar" :class="{'aki-toolbar-active': active}">
    <input type="radio" name="aki-toolbar"
      :id="label"
      :value="label"
      @change="checkChange(label)">
    <label :for="label">
      <slot></slot>
      <slot name="text" v-if="active"></slot>
      
    </label>
  </div>
</template>

<script>
export default {
  name: 'AkiToolbar',
  props: {
    label: {
      required: true,
      type: String,
    }
  },
  computed: {
    active() {
      return this.$parent.active === this.label
    }
  },
  data() {
    return {
      checked: '',
    }
  },
  methods: {
    checkChange(label) {
      this.$parent.dispatch(label)
    }
  },
}
</script>
