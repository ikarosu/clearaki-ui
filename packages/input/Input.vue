<template>
  <div class="aki-input">
    <div class="aki-input-main" :class="`aki-input-${style}`">
      <input :type="type">
    </div>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'AkiInput',
  props: {
    type: {
      type: String,
      default() { return 'text' }
    },
    style: {
      type: String,
      default() { return 'fill' }
    },
  }
}
</script>
