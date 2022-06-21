// import Config from '@/api/config'
let loadingOptions = {
  text: '',
  color: '#3e8ff7',
  maskColor: 'rgba(0, 0, 0, 0.2)'
}
// echarts-loading 前置处理
export const beforeGetDatas = (beforeCallback, needLoading) => {
  typeof beforeCallback === 'function' && beforeCallback()
  if (needLoading && needLoading.loadingEle) {
    needLoading.loadingEle.showLoading(loadingOptions)
  }
}

// echarts-loading 成功处理
export const successGetDatas = (successCallback, data, needLoading) => {
  if (data.noDatas) {
    let container = document.getElementById(needLoading.containerId)
    let element = document.createElement('div')
    element.className = 'no-datas'
    element.innerText = '暂无收入'
    if (data.noDatasText) {
      element.innerText = data.noDatasText
    }
    container.appendChild(element)
  } else {
    let container = document.getElementById(needLoading.containerId)
    if (container) {
      let domNoDatas = container.querySelectorAll('.no-datas')
      for (let i = 0; i < domNoDatas.length; i++) {
        let domItem = domNoDatas[i]
        container.removeChild(domItem)
      }
    }
  }
  typeof successCallback === 'function' && successCallback(data)
  // if (needLoading && needLoading.loadingEle) {
  //   needLoading.loadingEle.hideLoading()
  // }
}
