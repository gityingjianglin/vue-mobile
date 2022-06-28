/*
 * @Author: gityingjianglin yingjianglin123@163.com
 * @Date: 2022-06-23 09:43:01
 * @LastEditors: gityingjianglin yingjianglin123@163.com
 * @LastEditTime: 2022-06-28 15:38:57
 * @FilePath: \ruoyi-uig:\frontend-jsj\gitlab-templates\vue-mobile\src\utils\userCenter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
    localStorage.setItem(_getKeyWithNamespace('redirectUrl'), redirectUrl)
  } else {
    // 生产环境获取接口获取redirectUrl, 
    redirectUrl =  encodeURIComponent(res.data.redirectUri + 'index.html')
    localStorage.setItem(_getKeyWithNamespace('redirectUrl'), redirectUrl)
  }
  return redirectUrl
}


export const outLogin = () => {
  let appClientId = localStorage.getItem(_getKeyWithNamespace('appClientId'))
  let redirectUrl = localStorage.getItem(_getKeyWithNamespace('redirectUrl'))
  let hostName = localStorage.getItem(_getKeyWithNamespace('hostName'))
  if (redirectUrl && appClientId && hostName) {
    store.dispatch('LogOut').then(res => {
      window.location.href = `${hostName}/?client_id=${appClientId}&redirect_uri=${redirectUrl}#exit`
    })
  } else {
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
}

export const checkUserCenterLogin = (next) => {
  let code = getQueryString('code')
  if (!code) {
    let appClientId = localStorage.getItem(_getKeyWithNamespace('appClientId'))
    let redirectUrl = localStorage.getItem(_getKeyWithNamespace('redirectUrl'))
    let hostName = localStorage.getItem(_getKeyWithNamespace('hostName'))
    if (redirectUrl && appClientId && hostName) {
      window.location.href = `${hostName}/?client_id=${appClientId}&redirect_uri=${redirectUrl}#exit`
    } else {
      store.dispatch('userCenter').then(res => {
        debugger
        console.log(res, 'userCenter');
        let redirect_url = getRedirectUrl(res)
        let hostName = res.data.ssoUrl
        let appClientId = res.data.clientId
        window.location.href = `${hostName}/?response_type=code&client_id=${appClientId}&redirect_uri=${redirect_url}&state=#login`
        // 根据返回的参数判断应该跳转到那个页面
        // next({ path: "/nullParams" })
      })
    }
  } else {
    // 登录成功获取到code;
    let code = getQueryString('code')
    console.log(code);
    store.dispatch('codeLogin', {code:code}).then(res => {
      next({ path: "/" })
    }).catch (err => {
      console.log(err, 'err');
      next({ path: "/401" })
    })
  }
}

export const getKeyWithNamespace = _getKeyWithNamespace
