<template>
  <div class="main">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import tabbar from '@/components/tabbar/tabbar'
  export default {
    name: "index-tab",
    data () {
      return {
      }
    },
    components: {
      tabbar
    },
    methods: {
    },
    mounted () {
    },
    destroyed () {
      
    }
  }
</script>

<style scoped lang="scss">
  .main {
    width: 100%;
    height: 100%;
  }
</style>