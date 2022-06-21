<template>
  <div class="errPage-container">
 

        <img :src="errGif"  alt="Girl has dropped her ice cream.">
        <p class="errorMsg">{{errMessage}}</p>
        <p>如有疑问，请联系系统管理员！</p>
        <van-button type="primary" @click="jump">单页跳转</van-button>
        <van-button type="primary" @click="replaceLogin">重新登录</van-button>
  </div>
</template>

<script>
import errGif from '@/assets/401_images/401.png'
import { outLogin } from '@/utils/userCenter'
export default {
  name: 'Page401',
  data() {
    return {
      errGif: errGif + '?' + +new Date(),
      errMessage:''
    }
  },
  mounted(){
    this.errMessage = localStorage.getItem('errorMessage')
  },
  methods: {
    back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '/' })
      } else {
        this.$router.go(-1)
      }
    },
    replaceLogin () {
      outLogin()
    },
    jump () {
      this.$router.push({
        name: 'single'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .errPage-container {
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    padding-top: 100px;
    .pan-back-btn {
      background: #008489;
      color: #fff;
      border: none!important;
    }
    .pan-gif {
      margin: 0 auto;
      display: block;
    }
    .pan-img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    .text-jumbo {
      font-size: 60px;
      font-weight: 700;
      color: #484848;
    }
    .list-unstyled {
      font-size: 14px;
      li {
        padding-bottom: 5px;
      }
      a {
        color: #008489;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .err-box{
      text-align: center;
      font-size: 0.16rem;
      img {
        width: 3.4rem;
      }
      p {
        line-height: 0.5rem;
      }
    }
    .errorMsg{
      color: red;
    }
  }
</style>
