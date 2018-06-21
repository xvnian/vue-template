<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  // import {addClass} from './util/dom'
  // import {getInfoData, getCookie} from '@/api/info'

  export default {
    name: 'app',
    created() {
      // addClass()
      // debugger
      // getInfoData().then(res => {
      //   console.log(res)
      // })
      //
      // getCookie().then(res => {
      //   console.log(res)
      // })

      // this.getValue(2).then(res => {
      //   console.log(res)
      // })

      // let as = async () => {
      //   let a1 = await this.getValue(2)
      //   let a2 = await this.getValue(3)
      //   console.log(a1 + a2)
      // }

      this.as()

      // console.log(this)
    },
    methods: {
      async as() {
        // let a1 = await
        // this.getValue(2)
        // let a2 = await
        // this.getValue(3)
        // console.log(a1 + a2)
      },
      getValue(num) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(num)
          }, 1000)
        })
      }
    }
  }
</script>

<style>
  html {
    font-size: 0.266666666vw;
  }

  body {
    font-size: 12px;
  }
</style>
