import AES from 'crypto-js/aes'
import CryptoJS from 'crypto-js/core'
import ECB from 'crypto-js/mode-ecb'
import md5 from 'crypto-js/md5'
import Base64 from 'crypto-js/enc-base64'

/**
 * 获取url中得参数value值
 */
export const getQueryString = (name, url) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  if (!url || url === '') {
    url = window.location.href
  }
  url = url.substring(url.indexOf('?'))
  const r = url.substr(1).match(reg)
  if (r != null) return decodeURI(r[2])
  return ''
}

// aes 加密数据
const cryptJSConfig = {
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

// aes 加密数据
// 十六位十六进制数作为密钥
const key = CryptoJS.enc.Utf8.parse('1234567890ABCDEF')
// 十六位十六进制数作为密钥偏移量
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234567890')
export const aesEncrypt = (word) => {
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return encrypted.ciphertext.toString().toUpperCase()
}

// aes 解密跳转参数
export const aesDecrypt = (word) => {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

// md5 加密数据
export const encryptMd5 = (text) => {
  return md5(text).toString()
}

// base64 加密
export const encryptBase64 = (text) => {
  const str = CryptoJS.enc.Utf8.parse(text)
  return Base64.stringify(str)
}

// base64 解密
export const decryptBase64 = (text) => {
  const words = CryptoJS.enc.Base64.parse(text)
  return words.toString(CryptoJS.enc.Utf8)
}

// aes新加密法
// const newKey = CryptoJS.enc.Utf8.parse('abcdefgabcdefg12')
export const newEncrypt = (word) => {
  var key = CryptoJS.enc.Utf8.parse('abcdefgabcdefg12')
  var srcs = CryptoJS.enc.Utf8.parse(word)
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7})
  return encrypted.toString()
}

// as新解密法
export const aesNewDecrypt = (word) => {
  var key = CryptoJS.enc.Utf8.parse('abcdefgabcdefg12')
  var decrypt = CryptoJS.AES.decrypt(word, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7})
  return CryptoJS.enc.Utf8.stringify(decrypt).toString()
}

// aes新加密法
// const newKey = CryptoJS.enc.Utf8.parse('abcdefgabcdefg12')
export const custEncrypt = (word) => {
  var key = CryptoJS.enc.Utf8.parse('ykes20200706ykes')
  var srcs = CryptoJS.enc.Utf8.parse(word)
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7})
  return encrypted.toString()
}

// as新解密法
export const aesCustDecrypt = (word) => {
  var key = CryptoJS.enc.Utf8.parse('ykes20200706ykes')
  var decrypt = CryptoJS.AES.decrypt(word, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7})
  return CryptoJS.enc.Utf8.stringify(decrypt).toString()
}
