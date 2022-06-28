/*
 * @Author: gityingjianglin yingjianglin123@163.com
 * @Date: 2022-06-23 09:43:01
 * @LastEditors: gityingjianglin yingjianglin123@163.com
 * @LastEditTime: 2022-06-28 16:33:28
 * @FilePath: \ruoyi-uig:\frontend-jsj\gitlab-templates\vue-mobile\src\config\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let config = {
  namespace: 'vue-mobile', // 必须设置，项目命名空间，以gitlab项目标识串为准，为解决同一个域名下面的本地存储问题，本地存储一律加上项目namespace-appId
  openUserCenter: true, // 是否开启账户中心登录
  clientCode: 'FA000802', // euaf平台客户端code，用于换取euaf平台cliengId（非集团账户中心clientId）
  devUserCenterInfo: {
    localUrl: 'http://172.18.126.108:81' // 本地需配置ip地址，localhost换成127.0.0.1，如有端口号，把端口号也配置上，默认80端口无需配置
  },
  openRespondPlugin: true // 是否开启自适应插件
}
module.exports = config