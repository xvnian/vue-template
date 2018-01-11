<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {addClass} from './util/dom'

  export default {
    name: 'app',
    created() {
      addClass()
    }
  }
</script>

<style scoped>

</style>
