import axios from 'axios'
import { Toast, Dialog, Notify } from 'vant';
import store from '@/store'
import { getToken, removeToken } from '@/utils/auth'
import { tansParams } from "@/utils/tool";
import cache from '@/plugins/cache'
import rootVue from '@/main'
import { outLogin } from '@/utils/userCenter'
import { checkUserCenterLogin } from '@/utils/userCenter'
import { getStore, setStore, removeStore } from '@/utils/storage'

let errorCode = {
  '401': '认证失败，无法访问系统资源',
  '403': '当前操作没有权限',
  '404': '访问资源不存在',
  'default': '系统未知错误，请反馈给管理员'
}


let downloadLoadingInstance;
// 是否显示重新登录
export let isRelogin = { show: false };

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000
})

// request拦截器
service.interceptors.request.use(config => {
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false
  // 是否需要防止数据重复提交
  const isRepeatSubmit = (config.headers || {}).repeatSubmit === false
  if (getToken()) {
    config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  if (getStore('haier-user-center-access-token')) {
    config.headers['haier-user-center-access-token'] = getStore('haier-user-center-access-token') // 集团token
  }
  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url = config.url + '?' + tansParams(config.params);
    url = url.slice(0, -1);
    config.params = {};
    config.url = url;
  }
  if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
    const requestObj = {
      url: config.url,
      data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
      time: new Date().getTime()
    }
    const sessionObj = cache.session.getJSON('sessionObj')
    if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
      cache.session.setJSON('sessionObj', requestObj)
    } else {
      const s_url = sessionObj.url;                  // 请求地址
      const s_data = sessionObj.data;                // 请求数据
      const s_time = sessionObj.time;                // 请求时间
      const interval = 1000;                         // 间隔时间(ms)，小于此时间视为重复提交
      if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
        const message = '数据正在处理，请勿重复提交';
        console.warn(`[${s_url}]: ` + message)
        return Promise.reject(new Error(message))
      } else {
        cache.session.setJSON('sessionObj', requestObj)
      }
    }
  }
  return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
  // debugger
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']
    // 二进制数据则直接返回
    if(res.request.responseType ===  'blob' || res.request.responseType ===  'arraybuffer'){
      return res.data
    }
    if (code === 401) {
      let isHaier = localStorage.getItem('client_userAgent')
      if(isHaier === 'false') {
        if (!isRelogin.show) {
          isRelogin.show = true;
          Dialog.confirm({
            title: '系统提示',
            message: '登录状态已过期，您可以继续留在该页面，或者重新登录',
            confirmButtonText: '重新登录',
            cancelButtonText: '取消'
          }).then(() => {
            isRelogin.show = false;
            store.dispatch('LogOut').then(() => {
              checkUserCenterLogin()
              // rootVue._router.push('/login')
              // location.href = '/index';
            })
            // store.dispatch('LogOut').then(() => {
            //   // rootVue._router.push('/login')
            //   // location.href = '/index';
            // })
          }).catch(() => {
            // on cancel
            isRelogin.show = false;
          });
        }
      } else {
        removeToken()
        removeStore('haier-user-center-user-info')
        removeStore('haier-user-center-access-token')
        console.log('rootVue._router.history.pending.path')
        console.log(rootVue._router.history.current)
        if (rootVue._router.history.current && rootVue._router.history.current.path === '/index') {
          // window.location.reload()
        } else {
          rootVue._router.push('/index')
        }
      }
      return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else if (code === 500) {
      Notify({ type: 'warning', message: msg })
      return Promise.reject(new Error(msg))
    } else if (code !== 200) {
      Toast(msg)
      return Promise.reject('error')
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error)
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    }
    else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    }
    else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    Notify({
      type: 'warning',
      message: message,
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
