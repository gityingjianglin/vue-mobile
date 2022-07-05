/*
 * @Author: yingjianglin
 * @Date: 2022-06-23 09:43:01
 * @LastEditors: yingjianglin
 * @LastEditTime: 2022-07-05 11:49:52
 * @Description: 
 * 
 */
import Cookies from 'js-cookie'
import config from '@/config/config'

const TokenKey = config.namespace + '-Token'

const ExpiresInKey = 'Admin-Expires-In'

export function getToken() {
  return Cookies.get(TokenKey)
}
/**
 * @description: 设置token到cookies中
 * @param {string} token 
 * @return {*}
 */
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getExpiresIn() {
  return Cookies.get(ExpiresInKey) || -1
}

export function setExpiresIn(time) {
  return Cookies.set(ExpiresInKey, time)
}

export function removeExpiresIn() {
  return Cookies.remove(ExpiresInKey)
}
