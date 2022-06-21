<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: "Base",
  data() {
    return {}
  },
  mounted () {
    console.log(process.env)
  }
};
</script>

<style lang="scss">
  @import './assets/css/reset.scss';
  @import './assets/css/common.scss';
</style>
