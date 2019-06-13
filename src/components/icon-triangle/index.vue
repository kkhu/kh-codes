<template>
  <span class="icon-triangle" :class="direction"></span>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'up'
    }
  }
}
</script>

<style lang="stylus">
  .icon-triangle {
    width 15px
    height 15px
    display flex
    align-items center
    justify-content center
    iconTran() {
      display inline-block
      content ''
      border-left solid 5px transparent
      border-right solid 5px transparent
    }
    &.up::after {
      iconTran()
      border-bottom solid 5px #ffffff
    }
    &.down::after {
      iconTran()
      border-top solid 5px #ffffff
    }
  }
</style>
