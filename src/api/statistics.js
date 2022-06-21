import request from '@/utils/request'

// 获取病区列表
export function getUserDeptByHospitalId(query) {
  return request({
    url: '/system/dept/getUserDeptByHospitalId',
    method: 'get',
    params: query
  })
}

// 获取病区下患者列表
export function getRegistrantList(query) {
  return request({
    url: '/modelview/client/registrant/getRegistrantList',
    method: 'get',
    params: query
  })
}

// 获取患者诊断信息列表
export function getDiagnosisList(query) {
  return request({
    url: '/modelview/client/diagnosis/list',
    method: 'get',
    params: query
  })
}

// 获取诊断费用信息
export function getCostInfo(query) {
  return request({
    url: '/modelview/client/cost/getCostInfo',
    method: 'get',
    params: query
  })
}

// 费用占比接口
export function getProportionInfo(query) {
  return request({
    url: '/modelview/client/cost/getProportionInfo',
    method: 'get',
    params: query
  })
}

// 获取患者部位诊断信息列表
export function getPositionListInfo(query) {
  return request({
    url: '/modelview/client/diagnosis/position/list',
    method: 'get',
    params: query
  })
}

// 获取康复评定量表下拉框
export function getRecoveryFromInfo(query) {
  return request({
    url: '/modelview/client/recovery/form',
    method: 'get',
    params: query
  })
}

// 获取康复评定结果详情
export function getResultDetailInfo(query) {
  return request({
    url: '/modelview/client/recovery/result/detail',
    method: 'get',
    params: query
  })
}

// 获取康复评定结果（雷达图）
export function getResultRadarInfo(query) {
  return request({
    url: '/modelview/client/recovery/result/radar',
    method: 'get',
    params: query
  })
}