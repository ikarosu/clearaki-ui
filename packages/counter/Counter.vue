<template>
  <div class="aki-counter">
    <svg :fill="minusColor" width="24" viewBox="0 0 1024 1024" @click="handleMinus">
      <path d="M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
    </svg>
    <span v-text="count"></span>
    <svg :fill="plusColor" width="24" viewBox="0 0 1024 1024" @click="handlePlus">
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AkiCounter',
  model: {
    prop: 'count',
    event: 'change'
  },
  props: {
    step: {
      type: Number,
      default() { return 1 }
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    count: {
      type: Number,
      default() { return 0 }
    },
    fillColor: {
      type: String,
      default() { return 'currentColor' }
    },
    disabledColor: {
      type: String,
      default() { return '#ccc' }
    },
  },
  data() {
    return {
      minusColor: this.fillColor,
      plusColor: this.fillColor,
    }
  },
  watch: {
    count: {
      immediate: true,
      handler() {
        this.edgeTest()
      }
    },
    min() {
      this.edgeTest()
    },
    max() {
      this.edgeTest()
    }
  },
  methods: {
    edgeTest() {
      if (this.count === this.min) this.minusColor = this.disabledColor
      else if (this.count < this.min) this.$emit('change', this.min)
      else this.minusColor = this.fillColor
      if (this.count === this.max) this.plusColor = this.disabledColor
      else if (this.count > this.max) this.$emit('change', this.max)
      else this.plusColor = this.fillColor
    },
    handleMinus() {
      if (typeof this.min === 'number') {
        if (this.count - this.step >= this.min)
          this.$emit('change', this.count - this.step)
      } else
        this.$emit('change', this.count - this.step)
    },
    handlePlus() {
      if (typeof this.max === 'number') {
        if (this.count + this.step <= this.max)
          this.$emit('change', this.count + this.step)
      } else
        this.$emit('change', this.count + this.step)
    },
  },
}
</script>
