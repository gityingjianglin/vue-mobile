import store from '@/store/index'
import config from '@/config/config'
import { getQueryString } from '@/utils/utils'

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
    localStorage.setItem('redirectUrl', redirectUrl)
  } else {
    // 生产环境获取接口获取redirectUrl, 
    redirectUrl =  encodeURIComponent(res.data.redirectUri + 'index.html')
    localStorage.setItem('redirectUrl', redirectUrl)
  }
  return redirectUrl
}


export const outLogin = () => {
  store.dispatch('userCenter').then(res => {
    let redirectUrl = getRedirectUrl(res)
    let hostName = res.data.ssoUrl
    let appClientId = res.data.clientId
    console.log(appClientId,localStorage.getItem('appClientId'));
    store.dispatch('LogOut').then(res => {
      window.location.href = `${hostName}/?client_id=${appClientId}&redirect_uri=${redirectUrl}#exit`
    })
  })
}

export const checkUserCenterLogin = (next) => {
  let code = getQueryString('code')
  if (!code) {
    let appClientId = localStorage.getItem('appClientId')
    let redirectUrl = localStorage.getItem('redirectUrl')
    let hostName = localStorage.getItem('hostName')
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
