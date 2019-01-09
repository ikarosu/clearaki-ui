<template>
  <svg v-on="$listeners" :width="width" :height="height" :viewBox="box" :fill="fill">
    <path :d="d"></path>
  </svg>
</template>

<script>
export default {
  name: 'AkiIcon',
  props: {
    icon: {
      required: true,
      type: String
    },
    width: {
      type: String,
      default() { return '24' }
    },
    height: {
      type: String,
      default() { return this.width }
    },
    fill: {
      type: String,
      default() { return 'currentColor' }
    }
  },
  data() {
    return {
      d: '',
      box: '',
      icons: {
        'arrow-left': {
          path: 'M843 444.6H348.2l185.7-185.8-62-61.9L242 426.8l-0.1-0.2-61.9 62.1h0.1l-0.1 0.1 61.9 62.1 0.1-0.2 229.9 229.9 62-61.9-185.7-185.8H843z',
          box: '0 0 1024 1024',
        },
        'menu': {
          path: 'M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z',
          box: '0 0 1024 1024',
        },
        'close': {
          path: 'M831.632761 244.00634 765.925247 178.299849 503.095189 441.128883 240.265132 178.299849 174.558641 244.00634 437.387675 506.836397 174.558641 769.666454 240.265132 835.373968 503.095189 572.543911 765.925247 835.373968 831.632761 769.666454 568.802704 506.836397Z',
          box: '0 0 1024 1024',
        },
        'plus': {
          path: 'M896 480H544.8V128h-65.6v352H128v66.4h351.2V896h65.6V546.4H896z',
          box: '0 0 1024 1024',
        },
      }
    }
  },
  created() {
    this.d = this.icons[this.icon].path
    this.box = this.icons[this.icon].box
  }
}
</script>
