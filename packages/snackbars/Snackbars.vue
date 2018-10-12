<template>
  <transition name="aki-fade-zoom">
    <section v-if="visible"
      class="aki-snackbars"
      :class="[position, {'aki-snackbars-entire-width': fullWidth}]"
      :style="position!=='center'&&{[position]:offset}">
      <div class="aki-snackbars-wrap" :class="{'aki-snackbars-long-action': longAction}">
        <span>{{text}}</span>
        <aki-button v-if="action" class="aki-snackbars-action" size="dense" type="text">{{action}}</aki-button>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      during: false,
      position: 'bottom',
      offset: '8px',

      timer: null,
      visible: false,
      action: '',
      fullWidth: false,
      longAction: false,
    }
  },
  computed: {
    computedDuring() {
      return this.during || this.longAction && 10000 || this.action && 7000 || 4000
    }
  },
  watch: {
    visible(show) {
      if (show && this.position === 'bottom') {
        if (document.querySelector('.aki-toolbars') !== null)
          this.offset = '64px'
        if (document.querySelector('.aki-main.page') && document.querySelector('.aki-main.page').nextElementSibling)
          this.offset = `${document.querySelector('.aki-main.page').nextElementSibling + 8}px`
      }
    }
  },
  mounted() {
    // eslint-disable-next-line
    const chineseStr = this.action.match(/[^\x00-\xff]/gi) || []
    const chineseStrLength = chineseStr.length
    if (chineseStrLength * 2 + this.action.length - chineseStrLength > 7) this.longAction = true
    this.visible = true
    this.startTimer()
  },
  methods: {
    startTimer() {
      this.timer = setTimeout(() => {
        this.close()
      }, this.computedDuring)
    },
    close() {
      this.visible = false
    }
  },
}
</script>
