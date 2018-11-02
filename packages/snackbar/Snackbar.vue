<template>
  <transition name="aki-fade-zoom">
    <section v-if="visible"
      class="aki-snackbar"
      :class="[position, {'aki-snackbar-entire-width': fullWidth}]"
      :style="position!=='center'&&{[position]:offset}">
      <div class="aki-snackbar-wrap" :class="{'aki-snackbar-long-action': longAction}">
        <span>{{text}}</span>
        <aki-button @click="handleAction" v-if="action" class="aki-snackbar-action" size="xs" type="text">{{action}}</aki-button>
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

      resolve: null,
      reject: null,
    }
  },
  computed: {
    computedDuring() {
      return typeof this.during === 'number' ? this.during : this.longAction && 10000 || this.action && 7000 || 4000
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
    if (this.computedDuring > 0) this.startTimer()
  },
  methods: {
    startTimer() {
      this.timer = setTimeout(() => {
        this.close()
      }, this.computedDuring)
    },
    close() {
      this.visible = false
      this.action !== '' && this.reject(this)
    },
    open() {
      this.visible = true
      if (this.computedDuring > 0) this.startTimer()
      if (this.action !== '')
        return new Promise((resolve, reject) => {
          this.resolve = resolve
          this.reject = reject
        })
      else
        return this
    },
    handleAction() {
      this.visible = false
      this.action !== '' && this.resolve(this)
    }
  },
}
</script>
