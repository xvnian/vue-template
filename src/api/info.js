import axios from 'axios'
export function getInfoData() {
  return axios({
    method: 'get',
    url: 'http://api.huawei.com/info'
  })
}
