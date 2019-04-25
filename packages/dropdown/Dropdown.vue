
<template>
  <aki-dropdown-transition>
    <section class="aki-dropdown" v-show="open">
      <slot></slot>
    </section>
  </aki-dropdown-transition>
</template>

<script>
import AkiDropdownTransition from './Transition'
export default {
  name: 'AkiDropdown',
  components: { AkiDropdownTransition },
  props: {
    open: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
