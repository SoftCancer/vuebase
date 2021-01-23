import request from "./request";

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function getRequest(uri, params) {
  return request({
    url: uri,
    method: 'get',
    params: params
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function postRequest(uri, params) {
  return request({
    url: uri,
    method: 'post',
    data: params
  })
}

export function deleteRequest(uri, params) {
  return request({
    url: uri,
    method: 'delete',
    params: params
  })
}

export function putRequest(uri, params) {
  return request({
    url: uri,
    method: 'put',
    data: params
  })
}
