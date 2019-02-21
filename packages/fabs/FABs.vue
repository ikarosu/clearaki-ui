<template>
  <div class="aki-fabs" :class="{'aki-fabs-opened': opened}">
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
      opened: false,
      defaultMargin: 25
    }
  },
  computed: {
    position() {
      return this.fixed.split(',').map(_ => _ && Number(_))
    }
  },
  watch: {
    children(nodes) {
      nodes.forEach(node => {
        node.dataMini = true
        node.dataPlain = true
        node.dataFixed = `,${this.position[1] * 1.5},${this.position[2] + (this.defaultMargin += 56)}`
      })
    },
    position() {
      this.children.forEach(node => {
        node.dataFixed = `,${this.position[1] * 1.5},${this.position[2] + (this.defaultMargin += 56)}`
      })
    }
  }
}
</script>
