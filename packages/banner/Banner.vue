<template>
  <transition name="aki-slide-top">
    <section class="aki-banner-wrap" v-if="visible">
      <div class="aki-banner-content">
        <div v-if="$slots.icon" class="aki-banner-icon"><slot name="icon"></slot></div>
        <div class="aki-banner-text"><slot></slot></div>
      </div>
      <footer class="aki-banner-footer">
        <slot name="button"></slot>
      </footer>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'AkiBanner',
  props: {
    visible: {
      type: Boolean,
      default() { return false }
    }
  }
}
</script>
