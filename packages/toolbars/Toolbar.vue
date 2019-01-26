<template>
  <div class="aki-toolbar" :class="{'aki-toolbar-active': active}">
    <input type="radio" name="aki-toolbar"
      :id="`aki-toolbar-${label}-${tid}`"
      :value="label"
      :checked="active"
      @change="checkChange(label)">
    <label :for="`aki-toolbar-${label}-${tid}`">
      <div :class="{
             'aki-badge': badge!==false,
             'aki-badge-dot':badge===''}"
        :badge="badge">
        <slot></slot>
        <span class="aki-toolbar-text">
          <slot name="text" v-if="$parent.fixText || active">{{ label }}</slot>
        </span>
      </div>
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
    },
    badge: {
      type: [String, Number, Boolean],
      default: false
    },
  },
  computed: {
    active() {
      return this.$parent.active === this.label
    },
    tid() {
      return this.$parent._uid
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
