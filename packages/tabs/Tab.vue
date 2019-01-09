<template>
  <div class="aki-tab" :class="{'aki-tab-active': active}">
    <input type="radio" :name="`aki-tab-${tid}`"
      :id="`aki-tab-${label}-${tid}`"
      :value="label"
      :checked="active"
      @change="checkChange(label)">
    <label :for="`aki-tab-${label}-${tid}`">
      <div :class="{
             'aki-badge': typeof badge == 'string',
             'aki-badge-dot':badge==''}"
        :badge="badge">
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'AkiTab',
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
