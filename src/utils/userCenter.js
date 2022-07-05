/*
 * @Author: yingjianglin
 * @Date: 2022-06-23 09:43:01
 * @LastEditors: yingjianglin
 * @LastEditTime: 2022-07-05 11:52:37
 * @Description: 
 * 
 */
import store from '@/store/index'
import config from '@/config/config'
import { getQueryString } from '@/utils/utils'

let _getKeyWithNamespace = (sourceKey) => {
  return config.namespace + '_' + sourceKey
}

/**
   * getRedirectUrl
   * @param {resRedirectUrl} resRedirectUrl  // EUAF平台
   * login
   *
  */
// 获取对接账户中心开发/生产redirectUrl
export const getRedirectUrl = (res) => {
  let redirectUrl = ''
  if (process.env.NODE_ENV === 'development') {
    // 开发环境配置本地redirectUrl
    redirectUrl =  encodeURIComponent(`${config.devUserCenterInfo.localUrl}`)
  } else {
    // 生产环境获取接口获取redirectUrl, 
    redirectUrl =  encodeURIComponent(res.data.redirectUri + 'index.html')
  }
  return redirectUrl
}

export const outLogin = () => {
  store.dispatch('userCenter').then(res => {
    let redirectUrl = getRedirectUrl(res)
    let hostName = res.data.ssoUrl
    let appClientId = res.data.clientId
    console.log(appClientId,localStorage.getItem(_getKeyWithNamespace('appClientId')));
    store.dispatch('LogOut').then(res => {
      window.location.href = `${hostName}/?client_id=${appClientId}&redirect_uri=${redirectUrl}#exit`
    })
  })
}

export const checkUserCenterLogin = (next, to, from) => {
  let code = getQueryString('code')
  if (!code) {
    store.dispatch('userCenter').then(res => {
      console.log(res, 'userCenter');
      let redirect_url = getRedirectUrl(res)
      redirect_url = encodeURIComponent(window.location.href)
      let hostName = res.data.ssoUrl
      let appClientId = res.data.clientId
      window.location.href = `${hostName}/?response_type=code&client_id=${appClientId}&redirect_uri=${redirect_url}&state=#login`
    })
  } else {
    // 登录成功获取到code;
    let code = getQueryString('code')
    console.log(code)
    store.dispatch('codeLogin', {code:code}).then(res => {
      console.log('to')
      console.log(to)
      console.log('from')
      console.log(from)
      next()
    }).catch (err => {
      console.log(err, 'err');
      next({ path: "/401" })
    })
  }
}

export const getKeyWithNamespace = _getKeyWithNamespace
