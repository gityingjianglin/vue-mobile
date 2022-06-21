import config from '@/config/config'
/**
 * pc端响应式布局
 */
export default {
  install (Vue, options) {
    if (config.openRespondPlugin) {
      let doc = document
      let win = window
      let docEl = doc.documentElement
      let resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'
      let recalc = function () {
        let clientWidth = docEl.clientWidth
        if (!clientWidth) return
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
      }
      if (!doc.addEventListener) return
      win.addEventListener(resizeEvt, recalc, false)
      doc.addEventListener('DOMContentLoaded', recalc, false)
    }
  }
}
