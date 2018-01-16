import Mock from 'mockjs'

export default Mock.mock('http://api.huawei.com/info', {
  'name': '@name',
  'age|1-100': 100,
  'color': '@color'
})
