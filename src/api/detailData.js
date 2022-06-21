import request from '@/utils/request'

//查询检验项目列表
export function examineData (params) {
  return request ({
    method: 'GET',   
    url: '/modelview/client/examine/list',
    params : params,
  })
}

//查询检验详情
export function examineDetailData (params) {
  return request ({
    method: 'GET',   
    url: '/modelview/client/examine/detail/' + params,
    params : '',
  })
}

//查询检查项目列表
export function checkData (params) {
  return request ({
    method: 'GET',   
    url: '/modelview/client/check/list',
    params : params,
  })
}

//查询检查详情
export function checkDetailData (params) {
  return request ({
    method: 'GET',   
    url: '/modelview/client/check/detail/' + params,
    params : '',
  })
}
