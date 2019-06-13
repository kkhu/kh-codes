<template>
  <article>
    <section><c-button text="确认" /></section>
    <section><c-icon-cross /></section>
    <section><c-icon-triangle /></section>
    <section><c-info-item-button /></section>
    <section><c-input-number /></section>
    <section><c-pwd-safe-check-status-bar /></section>
    <section><c-tip-bar :show="true" content="请忽向他人泄露您的验证码" /></section>
  </article>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="stylus">
</style>
