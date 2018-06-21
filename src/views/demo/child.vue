<template>
  <div>
    <button @click="add">add</button>
    <button @click="init">show</button>
  </div>
</template>

<script>
  export default {
    props: {
      obj: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      init() {
        console.log(this.obj)
      },
      add() {
        this.obj.a = 3
      }
    }
  }
</script>

<style scoped>

</style>
