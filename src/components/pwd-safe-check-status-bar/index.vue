<template>
  <section class="pwd-safe-check-status-bar">
    <div class="status-txt" :class="cls" v-bind:state="state">{{statusTxt}}</div>
    <div class="status-graph">
      <span v-for="(item, j) in graphItems" v-bind:key="j" v-bind:class="bgcls[item]"></span>
    </div>
  </section>
</template>

<script>
import { getPwdSafeLevel } from './pwd'
export default {
  name: 'pwdSafeCheckStatusBar',
  data () {
    return {
      bgcls: ['bg-red', 'bg-orange', 'bg-green', 'bg-gray'],
      status: [
        {
          statusTxt: '弱',
          cls: 'red',
          graphItems: [0, 3, 3, 3]
        },
        {
          statusTxt: '一般',
          cls: 'orange',
          graphItems: [1, 1, 3, 3]
        },
        {
          statusTxt: '安全',
          cls: 'green',
          graphItems: [2, 2, 2, 3]
        },
        {
          statusTxt: '非常安全',
          cls: 'green',
          graphItems: [2, 2, 2, 2]
        }
      ],
      state: -1
    }
  },
  props: {
    pwd: String
  },
  watch: {
    pwd () {
      this.state = getPwdSafeLevel(this.pwd);
    }
  },
  mounted() {
    this.state = getPwdSafeLevel(this.pwd);
  },
  computed: {
    cls () {
      return this.state > -1 ? this.status[this.state].cls : '';
    },
    statusTxt () {
      return this.state > -1 ? this.status[this.state].statusTxt : '';
    },
    graphItems () {
      return this.state > -1 ? this.status[this.state].graphItems : [];
    }
  }
}
</script>

<style lang="stylus">
.pwd-safe-check-status-bar {
  $red = #ff3344
  $orange = #ffa200
  $green = #6fd12e
  .status-txt {
    text-align center
    width 2.06rem
    &[state="0"] {
      width 0.5rem
    }
    &[state="1"] {
      width 1rem
    }
    &[state="2"] {
      width 1.5rem
    }
    &.red {
      color $red
    }  
    &.orange {
      color $orange
    }
    &.green {
      color $green
    }
  }
  .bg-red {
    background $red
  }
  .bg-orange {
    background $orange
  }
  .bg-green {
    background $green
  }
  .bg-gray {
    background #dedede
  }
  .status-graph {
    width 2.06rem
    display flex
    justify-content space-between
    span {
      width 0.5rem
      height 0.04rem
    }
  }
}
</style>
