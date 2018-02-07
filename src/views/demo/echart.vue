<template>
  <div>
    <div id="chart"></div>
  </div>
</template>

<script>
  // var echarts = require('echarts')
  // require('echarts/lib/chart/bar')
  // // // 引入提示框和标题组件
  // require('echarts/lib/component/tooltip')
  // require('echarts/lib/component/title')

  // const echarts = () => import(/* webpackChunkName: "group-echart" */ 'echarts/lib/echarts')
  // const
  export default {
    mounted() {
      require.ensure([], function (require) {
        let echarts = require('echarts/lib/echarts')
        require('echarts/lib/chart/bar')
        // 引入提示框和标题组件
        require('echarts/lib/component/tooltip')
        require('echarts/lib/component/title')

        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('chart'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        })
      }, 'echart')

      // import(/* webpackChunkName: "echarts" */ 'echarts/lib/echarts').then(echarts => {
      //   // 引入柱状图
      //   // var echarts = require('echarts')
      //   require('echarts/lib/chart/bar')
      //   // 引入提示框和标题组件
      //   require('echarts/lib/component/tooltip')
      //   require('echarts/lib/component/title')
      //
      //   // 基于准备好的dom，初始化echarts实例
      //   var myChart = echarts.init(document.getElementById('chart'))
      //   // 绘制图表
      //   myChart.setOption({
      //     title: {
      //       text: 'ECharts 入门示例'
      //     },
      //     tooltip: {},
      //     xAxis: {
      //       data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      //     },
      //     yAxis: {},
      //     series: [{
      //       name: '销量',
      //       type: 'bar',
      //       data: [5, 20, 36, 10, 10, 20]
      //     }]
      //   })
      // })
    }
  }
</script>

<style scoped>
  #chart {
    width: 100%;
    height: 400px;
  }
</style>
