<template>
    <button v-show="isShow" class="comp-btn-view" :class="cls" :style="styl" @click="clickHandler"><slot>{{text}}</slot></button>
</template>

<script>
export default {
    name: 'comp-button',
    props: {
      cls: {
        type: String,
        default: ''
      },
      isShow: {
        type: Boolean,
        default: true
      },
      styl: Object,
      text: {
        type: String,
        default: ''
      },
      disable: {
        type: Boolean,
        default: false
      },
      data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      clickHandler() {
        if (this.disable) return
        this.$emit('on-click', this.data)
      }
    }
}
</script>

<style lang="stylus">
  .comp-btn-view {
    min-width 100%
    min-height 40px
    display flex
    justify-content center
    align-items center
    padding 0
    margin 0 auto
    background-color #F8F8F8
    border none
  }
</style>
