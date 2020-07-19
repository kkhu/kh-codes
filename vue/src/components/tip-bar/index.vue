<template>
  <section class="tip-bar-view" v-if="show">
    <slot name="iconInfo"><div class="icon-info"></div></slot>
    <div class="content" v-html="content"></div>
    <div class="btn-close" @click="close"><i class="icon-cross"></i></div>
  </section>
</template>

<script>
export default {
  name: 'tip-bar-view',
  props: {
    show: Boolean,
    content: {
      type: String,
      default: ''
    }
  },
  methods: {
    close () {
      this.$emit('close-cb')
    }
  }
}
</script>

<style lang="stylus">
.tip-bar-view {
  display flex
  height 40px
  padding 0 10px 0 0
  justify-content space-between
  align-items center
  background-color #fff6d1
  font-size 14px
  .icon-info {
    width 30px
    height 100%
    // background url('../../assets/info.png') no-repeat center
    background-size 15px
  }
  .content {
    flex-grow 1
    color #f74949
  }
  .btn-close {
    min-width 30px
    height 100%
    text-align right
    display flex
    justify-content flex-end
    align-items center
    .icon-cross {
      width 15px
      height 15px
      display flex
      justify-content center
      align-items center
      position relative
      el() {
        width 100%
        position absolute
        content ''
        display inline-block
        border-top solid 0.02rem #333333
      }
      &::before {
        el()
        transform rotate(45deg)
      }
      &::after {
        el()
        transform rotate(-45deg)
      }
    }
  }
}
</style>
