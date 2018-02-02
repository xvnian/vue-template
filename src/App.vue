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
