<template>
  <div class="aki-toolbar" :class="{'aki-toolbar-active': active}">
    <input type="radio" name="aki-toolbar"
      :id="label"
      :value="label"
      @change="checkChange(label)">
    <label :for="label">
      <div :class="{
        'aki-badges': typeof badges == 'string',
        'aki-badges-dot':badges==''}"
        :badges="badges">
        <slot></slot>
        <span class="aki-toolbar-text">
          <slot name="text" v-if="$parent.fixText || active">{{label}}</slot>
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
    checkChange(label) {
      this.$parent.dispatch(label)
    }
  },
}
</script>
