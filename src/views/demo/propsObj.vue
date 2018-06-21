<template>
  <div>
    <child :obj="key"></child>

    <form target="tt" method="get" action="http://localhost:8081">
      <input type="text">
      <input type="submit" value="submit">
    </form>

    <iframe @load="test" name="tt" frameborder="0" ref="file"></iframe>
    <p>
      <button @click="change">change key</button>
    </p>
  </div>
</template>

<script>
  import child from './child'
  //
  // function test() {
  //   console.log(1)
  // }

  export default {
    components: {
      child
    },
    name: 'props-obj',
    data() {
      return {
        key: {
          a: 1
        }
      }
    },
    watch: {
      'key'(newValue, oldValue) {
        console.log(newValue, oldValue)
      }
    },
    methods: {
      test() {
        console.log(this.$refs.file)
        // this.$refs.file
      },
      change() {
        this.key = {
          a: 5
        }
      }
    }
  }
</script>

<style scoped>

</style>
