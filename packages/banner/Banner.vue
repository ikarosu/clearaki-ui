<template>
  <aki-transition>
    <section class="aki-banner-wrap" v-if="visible">
      <div class="aki-banner-content">
        <div v-if="$slots.icon" class="aki-banner-icon"><slot name="icon"></slot></div>
        <div class="aki-banner-text"><slot></slot></div>
      </div>
      <footer class="aki-banner-footer">
        <slot name="button"></slot>
      </footer>
    </section>
  </aki-transition>
</template>

<script>
import AkiTransition from '../dropdown/Transition'
export default {
  name: 'AkiBanner',
  components: { AkiTransition },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>
