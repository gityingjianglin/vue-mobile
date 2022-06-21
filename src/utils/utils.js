import AES from 'crypto-js/aes'
import CryptoJS from 'crypto-js/core'
import ECB from 'crypto-js/mode-ecb'
import md5 from 'crypto-js/md5'
/**
 * 获取url中得参数value值
 */
export const getQueryString = (name, url) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  if (!url || url === '') {
    url = window.location.href
  }
  url = url.substring(url.indexOf('?'))
  let r = url.substr(1).match(reg)
  if (r != null) return decodeURI(r[2])
  return ''
}

// aes 加密数据
let cryptJSConfig = {
  mode: ECB,
  padding: CryptoJS.pad.Pkcs7
}
export const cryptoAes = (text, key) => {
  let result = ''
  if (text && key) {
    result = AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), cryptJSConfig)
  }
  return result.ciphertext.toString(CryptoJS.enc.Hex)
}

// 根据url参数，key，value转换成对象级
export const formatUrlParamsToObj = (urlParamsStr) => {
  if (urlParamsStr) {
    let paramsStrArr = urlParamsStr.split('&')
    let paramsObj
    for (let i = 0; i < paramsStrArr.length; i++) {
      let item = paramsStrArr[i]
      let itemArr = item.split('=')
      paramsObj[itemArr[0]] = itemArr[1]
    }
    return paramsObj
  } else {
    return ''
  }
}

export const getDomainName = () => {
  return window.location.protocol + '//' + window.location.host
}

export const conctNewQueryString = () => {
  return 'tj-' + parseInt(Math.random() * 10000) + '-' + new Date().getTime()
}

export const getNowDate = () => {
  let nowTime
  let time = new Date()
  let year = time.getFullYear() // 获取完整的年份(4位,1970-???)
  let month = time.getMonth() + 1 // 获取当前月份(0-11,0代表1月)
  let date = time.getDate() // 获取当前日(1-31)
  let hour = time.getHours() // 获取当前小时数(0-23)
  let minute = time.getMinutes() // 获取当前分钟数(0-59)
  let seconds = time.getSeconds() // 获取当前秒数(0-59)
  if (month < 10) {
    month = '0' + month
  }
  if (date < 10) {
    date = '0' + date
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  nowTime = year + month + date + hour + minute + seconds
  return nowTime
}

// md5 加密数据
export const encryptMd5 = (text) => {
  return md5(text).toString()
}
