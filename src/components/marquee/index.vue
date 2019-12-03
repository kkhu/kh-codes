<template>
  <section class="marquee-bar-wp" :class="clustomClass" :style="clustomStyle" v-show="show">
    <slot name="left"><div></div></slot>
    <div class="mq-content-wp" ref="mqContentWp" @click="clickHandler">
      <ul class="items" :class="animationClass" ref="mqItems" :style="contentStyle" @animationend="onAnimationEnd" @webkitAnimationEnd="onAnimationEnd">
        <li v-for="(c, i) in content" v-html="c" :key="i" :ref="'item' + i"></li>
      </ul>
    </div>
    <div class="right close" @click="close" v-if="showClose">
      <slot right="right"><icon-cross /></slot>
    </div>
  </section>
</template>

<script>
import iconCross from '../icon-cross'
export default {
  name: 'marqueeBar',
  components: {
    'icon-cross': iconCross
  },
  data () {
    return {
      duration: 0,
      contenttWrapperWidth: 0,
      width: 100000,
      canvas: null,
      cvsCtx: null,
      animationClass: '',
      firstRound: true
    }
  },
  props: {
    show: Boolean,
    clustomStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    clustomClass: [String, Object, Array],
    content: {
      type: Array,
      default() {
        return []
      }
    },
    speed: {
      type: Number,
      default: 50
    },
    showClose: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    contentStyle() {
      return {
        width: this.width + 'px',
        paddingLeft: this.firstRound ? 0 : this.contenttWrapperWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      }
    }
  },
  watch: {
    content: {
      handler() {
        this.$nextTick(() => {
          let _width = 0;
          this.contenttWrapperWidth = this.$refs.mqContentWp.getBoundingClientRect().width;
          for (let i = 0; i < this.content.length; i++) {
            _width += this.$refs['item' + i][0].getBoundingClientRect().width;
          }
          if (_width > this.contenttWrapperWidth) {
            this.width = _width;
            this.duration = this.width / this.speed;
            this.animationClass = 'run';
          }
        })
      },
      immediate: true
    }
  },
  methods: {
    clickHandler() {
      this.$emit('click')
    },
    close() {
      this.$emit('close');
    },
    onAnimationEnd () {
      this.firstRound = false
      this.$nextTick(() => {
        this.duration = (this.width + this.contenttWrapperWidth) / this.speed;
        this.animationClass = 'run-infinite';
      })
    }
  }
}
</script>

<style lang="stylus">
.marquee-bar-wp {
  display: flex;
  align-items: center;
  height: 100;
  @keyframes ani-marquee-run {
    to { transform: translate3d(-100%, 0, 0) }
  }
  @keyframes ani-marquee-run-infinite {
    to { transform: translate3d(-100%, 0, 0) }
  }
  .left {}
  .mq-content-wp {
    overflow: hidden;
    position: relative;
    flex: 1;
    height: 100%;
    ul {
      margin: 0;
      padding: 0;
      position: absolute;
    }
    ul > li {
      list-style: none;
      float: left;
    }
    .run {
      animation: ani-marquee-run linear both; 
    }
    .run-infinite {
      animation: ani-marquee-run-infinite linear infinite both; 
    }
  }
  .close {
    padding: 0 5px;
  }
}
</style>
