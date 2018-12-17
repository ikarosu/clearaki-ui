<template>
  <aki-dialog :visible.sync="visible" @close="closed">
    <h3 slot="header" v-text="title"></h3>
    <div v-html="content"></div>
    <aki-input v-if="action==='prompt'" full :type="type" nobg v-model="text" :label="label"></aki-input>
    <aki-button v-if="action!=='alert'" slot="footer" @click="cancel">{{ btnCancel }}</aki-button>
    <aki-button slot="footer" @click="handleConfirm">{{ btnConfirm }}</aki-button>
  </aki-dialog>
</template>

<script>
import Dialog from '../dialog/Dialog'
import Button from '../button/Button'
import Input from '../input/Input'
export default {
  name: 'AkiConfirm',
  components: {
    'aki-dialog': Dialog,
    'aki-button': Button,
    'aki-input': Input,
  },
  data() {
    return {
      visible: false,
      resolve: null,
      reject: null,

      title: '提示',
      content: '是否确认进行当前操作？',
      action: 'confirm',
      type: 'text',

      text: '',
      label: '',

      btnCancel: '取消',
      btnConfirm: '确认',
    }
  },
  mounted() {
    this.visible = true
  },
  methods: {
    close() {
      this.visible = false
    },
    handleConfirm() {
      this.resolve(this.text)
      this.close()
    },
    closed() {
      this.reject()
    },
    handleCancel() {
      this.reject()
      this.close()
    }
  }
}
</script>
