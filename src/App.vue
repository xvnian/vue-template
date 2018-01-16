<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  // import {addClass} from './util/dom'
  import {getInfoData} from '@/api/info'

  export default {
    name: 'app',
    created() {
      // addClass()
      getInfoData().then(res => {
        console.log(res)
      })
    }
  }
</script>

<style scoped>

</style>
