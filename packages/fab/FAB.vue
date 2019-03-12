<template>
  <button
    v-on="$listeners"
    class="aki-fab"
    :class="[
      `aki-fab-${rMini ? 'mini' : 'regular'}`,
      `aki-fab-${rPlain ? 'plain' : 'fill'}`,
      {'aki-fab-fixed': location.length},
    ]"
    :style="{ top, right, bottom, left }"
  >
    <Icon v-if="typeof icon === 'string'" :icon="icon" />
    <svg v-else :viewBox="icon.box" :width="icon.width" :height="icon.height" class="aki-icon" :fill="icon.fill || 'currentColor'">
      <path :d="icon.path"></path>
    </svg>
  </button>
</template>

<script>
// import Button from '../button'
import Icon from '../icon'
export default {
  name: 'AkiFab',
  components: { Icon },
  props: {
    icon: {
      type: [String, Object],
      required: true
    },
    mini: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dataFixed: '',
      dataPlain: '',
      dataMini: '',
    }
  },
  computed: {
    rMini() {
      return this.dataMini || this.mini
    },
    rPlain() {
      return this.dataPlain || this.plain
    },
    location() {
      return this.dataFixed || this.fixed
    },
    position() {
      return this.location.split(',').map(_ => _ && Number(_))
    },
    top() {
      const [v] = this.position
      return v && `${v}px`
    },
    right() {
      const [, v] = this.position
      return v && `${v}px`
    },
    bottom() {
      const [,, v] = this.position
      return v && `${v}px`
    },
    left() {
      const [,,, v] = this.position
      return v && `${v}px`
    },
  },
  mounted() {
    if (this.$parent.$vnode.tag.includes('AkiFabs') && this.$el.parentElement.classList.contains('aki-fabs-layout'))
      this.$parent.children.push(this)
  }
}
</script>
