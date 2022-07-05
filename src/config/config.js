/*
 * @Author: yingjianglin
 * @Date: 2022-06-23 09:43:01
 * @LastEditors: yingjianglin
 * @LastEditTime: 2022-07-05 11:48:24
 * @Description: 
 * 
 */
let config = {
  namespace: 'vue-mobile', // 必须设置，项目命名空间，以gitlab项目标识串为准，为解决同一个域名下面的本地存储问题，本地存储一律加上项目namespace-appId
  openUserCenter: true, // 是否开启账户中心登录
  clientCode: 'FA000803', // euaf平台客户端code，用于换取euaf平台cliengId（非集团账户中心clientId）
  devUserCenterInfo: {
    localUrl: 'http://localhost' // 本地需配置ip地址，localhost换成127.0.0.1，如有端口号，把端口号也配置上，默认80端口无需配置
  },
  openRespondPlugin: true // 是否开启自适应插件
}
module.exports = config
