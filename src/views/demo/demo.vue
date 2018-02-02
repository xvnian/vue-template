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
    <div>
      <button @click="add">add</button>
      <button @click="decrement"> delete</button>
    </div>

    <div class="elment" id="demowrap">
      <p v-for="item in 100">sjjjjjjj</p>
    </div>

  </div>
</template>

<script>
  export default {
    created() {
      console.log(this.$store)
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
        this.$store.commit('demo/DO_SOMETHING')
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

  .elment {
    height 300px
    overflow: auto;
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
