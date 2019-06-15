<template>
  <article>
    <section>
      <p>c-button</p>
      <c-button text="确认" />
    </section>
    <section>
      <p>c-icon-cross</p>
      <c-icon-cross />
    </section>
    <section>
      <p>c-icon-triangle</p>
      <c-icon-triangle />
    </section>
    <section>
      <p>c-info-item-button</p>
      <c-info-item-button />
    </section>
    <section>
      <p>c-input-number</p>
      <c-input-number />
    </section>
    <section>
      <p>c-pwd-safe-check-status-bar</p>
      <c-pwd-safe-check-status-bar />
    </section>
    <section>
      <p>c-tip-bar</p>
      <c-tip-bar :show="true" content="请忽向他人泄露您的验证码" />
    </section>
    <section>
      <p>c-marquee</p>
      <c-marquee :content="marqueeData" :show="true" />
    </section>
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
