<template>
  <div>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item name="home" to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="401" to="/401" icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'tabbar',
    data() {
      return {
        active: 'home'
      }
    },
    watch: {
      $route(to, form) {
        this.checkNavagate()
      }
    },
    components: {
    },
    props: {
      msg: String
    },
    methods: {
      checkNavagate () {
        const navBarActive = window.location.hash
        if (navBarActive.includes('#/home')) {
          this.active = 'home'
        } else if (navBarActive.includes('#/401')) {
          this.active = '401'
        }
      }
    },
    
    mounted () {
      debugger
      this.checkNavagate()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
