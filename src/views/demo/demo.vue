<template lang="html">
  <div class="demo ss">
    hello
    <ul class="ss">
      <li>1</li>
      <li>2</li>
      <li class="">3</li>
      <li>4</li>
    </ul>
    count: {{count}}
    doubleCount: {{doubleCount}}
    <div style="border-top: 1px solid #ccc">
      <button @click="add">add</button>
      <button @click="decrement"> delete</button>
    </div>
    <img src="./images/2.png" style="width:50px;" alt="">
    <div class="elment" id="demowrap">
      <p v-for="item in 100">sjjjjjjj</p>
    </div>
    <child ref="demo"></child>
  </div>
</template>

<script>
  import child from './child'

  export default {
    created() {

    },
    components: {
      child
    },
    computed: {
      count() {
        return this.$store.state.demo.count
        // return 1
      },
      doubleCount() {
        return this.$store.getters['demo/doubleCount']
        // return 2
      }

    },
    methods: {
      add() {
        // console.log(this.$refs.demo.init())
        // this.$store.commit('demo/DO_SOMETHING')
        this.$store.dispatch('demo/add')
        // console.log(this.$store.dispatch('demo/add'))
      },
      decrement() {
        this.$store.commit('decrement')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~assets/stylus/variable"
  @import "~assets/stylus/mixin"

  .elment{
    /*border-top 1px solid #ccc*/
    /*border-bottom 0.2px solid #ccc*/
    background #cccccc
    height 1px
    transform scale(0.9)
  }

  .elment {
    height 300px
    overflow: hidden

  }

  .elment::-webkit-scrollbar-track-piece {
    background-color: rgba(0, 0, 0, 0);
    border-left: 1px solid rgba(0, 0, 0, 0);
  }

  .elment::-webkit-scrollbar {
    width: 6px;
    height: 13px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .elment::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    background-clip: padding-box;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    min-height: 28px;
  }

  .elment::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
</style>
