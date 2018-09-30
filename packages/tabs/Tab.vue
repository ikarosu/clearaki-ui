<template>
  <div class="aki-tab" :class="{'aki-tab-active': active}">
    <input type="radio" name="aki-tab"
      :id="label"
      :value="label"
      @change="checkChange(label, $el)">
    <label :for="label">
      <div :class="{
        'aki-badges': typeof badges == 'string',
        'aki-badges-dot':badges==''}"
        :badges="badges">
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
    badges: false,
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
    checkChange(label, target) {
      this.$parent.dispatch(label, target)
    }
  },
}
</script>
