<template>
    <input class="i-num-input" v-model="num" type="text" @keyup.enter="enter" @keyup="change" :maxlength="maxLength" :placeholder="placeholder" />
</template>

<script>
export default {
  data () {
    return {
      tempValue: '',
      num: ''
    }
  },
  props: {
    defaultValue: '',
    maxLength: {
      type: Number,
      default: 12
    },
    placeholder: {
      type: String,
      default: '请勿输入整数'
    },
    numPattern: {
      type: RegExp,
      default () {
        return /^\d+\.?\d{0,2}$/g
      }
    },
    precision: {
      type: Number,
      default: 2
    }
  },
  watch: {
    defaultValue () {
      this.num = this.defaultValue
    }
  },
  methods: {
    enter () {
      this.$emit('enter')
    },
    change () {
      if (new RegExp('^\\d+\\.?\\d{0,' + this.precision + '}$').test(this.num) || !this.num) {
        this.tempValue = this.num
        this.$emit('change', this.num)
      } else {
        this.num = this.tempValue
      }
    }
  }
}
</script>

<style lang="stylus">
  .i-num-input {
    line-height .3rem
    color #333
    padding 0 .12rem
    font-size .14rem
    background-color #fff
    border .01rem solid #ccc
    border-radius .02rem
    box-sizing border-box
    &:focus {
      border-color #f17d0b
      box-shadow 0 0 0.05rem #f17d0b
    }
    &:hover {
      border-color #f17d0b
    }
  }
</style>
