let config = {
  openUserCenter: true, // 是否开启账户中心登录
  clientId: '0534b0373a784b1f830c7d86e587bc5f', // EUAF平台clientId，todo后期根据客户端代码获取clientId
  devUserCenterInfo: {
    localUrl: 'http://127.0.0.1' // 本地需配置ip地址，localhost换成127.0.0.1，如有端口号，把端口号也配置上，默认80端口无需配置
  },
  openRespondPlugin: true // 是否开启自适应插件
}
module.exports = config