<template>
  <div ref="wrapper">
    <div class="scroll-group">
      <div class="pulldown-wrapper" v-if="pulldown">
        <div v-show="isPullingDown">
          <div class="spinner-loading h-view justify-center align-center"><div class="spinner"></div><div>刷新中</div></div>
        </div>
        <div v-show="!isPullingDown"><span>加载成功</span></div>
      </div>
      <slot></slot>
      <div class="pullup-wrapper" :class="{'active': activePullUp}" v-if="pullup && showPullUpLoading">
        <div v-if="!isPullUpLoad" class="before-trigger">
          <span class="pullup-txt">上滑加载更多</span>
        </div>
        <div v-else class="after-trigger">
          <span class="pullup-txt">加载中...</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
// import { isIOS, getIOSVersion } from '@/utils/envi'
import BScroll from 'better-scroll'
export default {
  props: {
    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 1
    },
    bounce: {
      type: Boolean,
      default: true
    },
    /**
     * 点击列表是否派发click事件
     */
    click: {
      type: Boolean,
      default: true
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表的数据
     */
    data: {
      type: Array,
      default: null
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动结束事件
     */
    listenScrollEnd: {
      type: Boolean,
      default: false
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 20
    },
    // 是否显示滚动条
    showScrollBar: {
      type: Boolean,
      default: false
    },
    scrollXSize: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    // 保证在DOM渲染完毕后初始化better-scroll
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  data () {
    return {
      scroll: '',
      isPullingDown: true,
      isPullUpLoad: false,
      showPullUpLoading: true,
      activePullUp: false
    }
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      // better-scroll的初始化
      let scrollOptions = {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX,
        autoBlur: false,
        scrollbar: this.showScrollBar ? {
          fade: false,
          interactive: true // 1.8.0 新增
        } : false,
        bounce: {
          left: false,
          right: false
        },
        useTransition: false
      }
      /* const ver = window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
      console.log(ver)
      const isIosVerLgThan1304 = ver && ver.length > 3 && ver[1] >= 13 && ver[2] >= 4
      console.log('ios:' + isIosVerLgThan1304) */
      /* console.log('isIos:' + isIOS())
      console.log('iosVersion:' + getIOSVersion()) */
      if (!this.bounce) {
        scrollOptions.bounce = false
      }
      if (this.pulldown) {
        scrollOptions.pullDownRefresh = {
          threshold: 70,
          stop: 56
        }
      }
      if (this.pullup) {
        scrollOptions.pullUpLoad = true
      }
      this.scroll = new BScroll(this.$refs.wrapper, scrollOptions)

      // 是否派发滚动事件
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }
      // 下拉刷新
      if (this.pulldown) {
        this.scroll.on('pullingDown', () => {
          // this.isPullingDown = true
          this.$emit('pullingDownHandler', this.scroll)
        })
      }
      // 上滑加载更多
      if (this.pullup) {
        this.scroll.on('pullingUp', () => {
          console.log('*****************************')
          this.activePullUp = true
          this.$emit('pullingUpHandler', this.scroll)
        })
      }
      /* // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullup) {
        this.scroll.on('touchEnd', () => {
          // 滚动到底部
          if (this.scroll.y <= (this.scroll.maxScrollY + 10)) {
            console.log('加载更多')
            this.$emit('scrollToEnd')
          }
        })
      } */
      /* // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.scroll.on('touchEnd', (pos) => {
          // 下拉动作
          if (pos.y > 50) {
            this.$emit('pulldown')
          }
        })
      }

      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.listenScrollEnd) {
        this.scroll.on('scrollEnd', () => {
          this.$emit('scrollend')
        })
      } */

      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    disable () {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable()
    },
    enable () {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable()
    },
    refresh () {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh()
    },
    scrollTo () {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    // data () {
    //   setTimeout(() => {
    //     this.refresh()
    //   }, this.refreshDelay)
    // },
    // scrollXSize (val) {
    //   this.scroll.scrollTo(val, 0, 0)
    // }
  }
}
</script>

<style scoped lang="scss">
  .scroll-group {
    // padding: 1px 0;
  }
  .pullup-wrapper {
    padding: 0.3rem 0 0.4rem;
    font-size: 0.3rem;
    text-align: center;
    color: #999;
    opacity: 0;
  }
  .pullup-wrapper.active {
    opacity: 1;
  }
</style>
