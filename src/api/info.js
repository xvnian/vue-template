import axios from 'axios'

export function getInfoData() {
  return axios({
    method: 'get',
    url: 'http://api.huawei.com/info'
  })
}

export function getCookie() {
  return axios({
    method: 'get',
    url: 'http://localhost.huawei.com:8081/cookie'
  })
}
