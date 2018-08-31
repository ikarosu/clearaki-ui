<template>
  <button class="aki-btn" :class="[`aki-btn-${type}`, {'aki-btn-dense': size=='dense'}]">
    <span>O</span>
    老虎
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default() { return 'unelevate' }
    },
    size: {
      type: String,
      default() { return 'middle' }
    },
  }
}
</script>

<style lang="less" scoped>
@import url(../less/variable);
button.aki-btn{
  background: none;
  border: none;
  outline: none;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  padding: 0 16px;

  min-width: 64px;
  height: 36px;

  line-height: 1;
  font-size: 0.875rem;
  font-weight: 500;

  border-radius: 2px;
  >:first-child{
    margin-left: -4px;
    margin-right: 8px;
  }
  &+button.aki-btn{
    margin-left: 1rem;
  }
  &.aki-btn-dense{
    height: 32px;
    font-size: 0.8125rem;
    &.aki-btn-outline{
      line-height: 28px;
    }
  }
  &:hover{
    cursor: pointer;
  }

  &.aki-btn-text,&.aki-btn-outline{
    color: @color-primary;
    background-color: white;
    &:hover{
      background-color: lighten(@color-primary, 50%)
    }
    &:focus{
      background-color: lighten(@color-primary, 45%)
    }
  }
  &.aki-btn-raise,&.aki-btn-unelevate{
    color: white;
    background-color: @color-primary;
    &:hover{
      background-color: lighten(@color-primary, 5%)
    }
    &:focus{
      background-color: lighten(@color-primary, 15%)
    }
  }

  &.aki-btn-text{
    padding: 0 8px;
    >:first-child{
      margin-left: 0;
    }
  }
  &.aki-btn-raise{
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    transition: box-shadow .28s cubic-bezier(.4,0,.2,1);
    &:hover{
      box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
    }
  }
  &.aki-btn-outline{
    border-color: @color-primary;
    border-style: solid;
    padding: 0 14px;
    line-height: 32px;
    border-width: 2px;
  }
}
</style>

