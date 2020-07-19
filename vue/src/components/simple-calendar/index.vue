<template lang="jade">
  <div class="simple-calendar-view">
    <div class="calendar-header flex flex-ai-c ft14">
      <div class="week" v-for="w in weeks">{{w}}</div>
    </div>
    <div class="calendar-days flex ft18">
      <div class="day-item flex flex-ai-c flex-jt-c" v-for="d in firstDay">
        <div class="day"></div>
      </div>
      <div class="day-item.flex.flex-ai-c.flex-jt-c" v-for="d in daysOfMonth">
        <div class="day">{{d}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'simple-calendar-view',
  data () {
    return {
      weeks: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      daysOfMonth: 0,
      firstDay: 0,
      date: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.date = new Date();
      this.firstDay = this.getFirstDayOfMonth(this.date);
      this.daysOfMonth = this.getDaysOfMonth(this.date.getFullYear, this.date.getMonth);
    },
    getFirstDayOfMonth(date) {
      const temp = new Date(date.getTime())
      temp.setDate(1)
      return temp.getDay()
    },
    getDaysOfMonth(year, month) {
      if (month === 3 || month === 5 || month === 8 || month === 10) {
        return 30
      }
      if (month === 1) {
        return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? 29 : 28
      }
      return 31
    }
  }
}
</script>

<style lang="stylus">
.flex
  display flex
.flex-ai-c
  align-items center
.flex-jt-c
  justify-content center
.flex-wp-wp
  flex-wrap wrap
.ft18
  font-size .18rem
.ft14
  font-size .14rem
 .simple-calendar-view
  width 100%
  .calendar-header
    height 0.60rem
    color #202020
    .week
      width .62rem
      text-align center
      font-weight bold
  .calendar-days
    flex-wrap wrap
    .day-item
      width .62rem
      margin 0.06rem 0 0.06rem 0
      cursor pointer
    .day 
      width 0.4rem
      height 0.4rem
      line-height 0.4rem
      text-align center
      color #9b9b9b
      background-color #cccccc
</style>
