import request from '@/utils/request'

// 登录方法
export function login(username, password, code, uuid, clientId, grantCode) {
  return request({
    url: '/auth/login',
    headers: {
      isToken: false
    },
    method: 'post',
    data: { username, password, code, uuid, clientId, grantCode }
  })
}

// 注册方法
export function register(data) {
  return request({
    url: '/auth/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 刷新方法
export function refreshToken() {
  return request({
    url: '/auth/refresh',
    method: 'post'
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/system/user/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/auth/logout',
    method: 'delete'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/code',
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  })
}

// 获取系统的集团配置参数
export function getGroupParam(clientId, grantCode) {
  return request({
    url: 'system/client/getHaierAuthConfig/' + clientId + '/' + grantCode,
    method: 'get'
  })
}

// 使用code换取登录参数
export function lodeLogin(appClientId, code, loginType) {
  return request({
    url: 'auth/haierLogin/' + appClientId + '/' + loginType + '?code='+ code,
    method: 'get'
  })
}
