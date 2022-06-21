import cache from './cache'
import modal from './modal'
import respondPlugin from './respondPlugin'

export default {
  install(Vue) {
    // 缓存对象
    Vue.prototype.$cache = cache
    // 模态框对象
    Vue.prototype.$modal = modal
    Vue.use(respondPlugin)
  }
}
