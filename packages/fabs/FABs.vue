<template>
  <div class="aki-fabs">
    <transition name="aki-rotate">
      <fab
        v-if="!opened"
        ref="main"
        :icon="icon"
        :fixed="fixed"
        @click="opened=true"
      />
      <fab
        v-else
        key="close"
        icon="close"
        :fixed="fixed"
        @click="opened=false"
      />
    </transition>
    <div class="aki-fabs-layout">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Fab from '../fab'
export default {
  name: 'AkiFabs',
  components: { Fab },
  props: {
    icon: {
      type: String,
      required: true
    },
    fixed: {
      type: String,
      default: ',16,16'
    }
    // opened: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data() {
    return {
      children: [],
      opened: false
    }
  },
  computed: {
    position() {
      return this.$refs.main.position
    }
  },
  watch: {
    children(nodes) {
      let init = 25
      nodes.forEach(node => {
        node.dataMini = true
        node.dataPlain = true
        node.dataFixed = `,${this.position[1] * 1.5},${Number(
          this.position[2]
        ) + (init += 56)}`
      })
    }
  }
}
</script>
