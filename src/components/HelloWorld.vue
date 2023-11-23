<template>
  <scroll class="scroll-container-top">
    <div>
      1111111
      <van-button type="primary" @click="logout">登出</van-button>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>

    </div>
  </scroll>
</template>

<script>
import { outLogin } from '@/utils/userCenter'
import scroll from '@/components/scroll/scroll.vue'
export default {
  name: 'HelloWorld',
  components: {
    scroll
  },
  props: {
    msg: String
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        outLogin()
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
