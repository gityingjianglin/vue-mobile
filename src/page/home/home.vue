<template>
  <div class="container">
    <hello-world></hello-world>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'
  import tabbar from '@/components/tabbar/tabbar'
  export default {
    name: "home",
    data () {
      return {
        contentHeight: {},
        scrollTop: 0
      }
    },
    components: {
      HelloWorld,
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
  .container {
    width: 100%;
    height: 100%;
  }
</style>