import Demo from 'views/demo/demo'
import Echart from 'views/demo/echart'
import Upload from 'views/demo/upload'

// const Demo = () => import(/* webpackChunkName: "group-demo" */ 'views/demo/demo')
// const Echart = () => import(/* webpackChunkName: "group-demo" */ 'views/demo/echart')

export default [
  {
    path: '/demo',
    component: Demo
  },
  {
    path: '/echart',
    component: Echart
  },
  {
    path: '/upload',
    component: Upload
  }
]
