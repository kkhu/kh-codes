<template>
  <article>
    <section><c-button text="确认" /></section>
    <section><c-icon-cross /></section>
    <section><c-icon-triangle /></section>
    <section><c-info-item-button /></section>
    <section><c-input-number /></section>
    <section><c-pwd-safe-check-status-bar /></section>
    <section><c-tip-bar :show="true" content="请忽向他人泄露您的验证码" /></section>
    <c-marquee :content="marqueeData" :show="true" />
  </article>
</template>

<script>
export default {
  data() {
    return {
      marqueeData: [
        '1. 尊敬的客户 活动开始了，快来看看吧，来的都有礼品一份。', 
        '2. 尊敬的客户 活动开始了，快来看看吧，来的都有礼品一份。'
      ]
    }
  },
  methods: {}
}
</script>

<style lang="stylus">
</style>
