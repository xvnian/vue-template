<template>
  <div class="container">
    <upload action="//jsonplaceholder.typicode.com/photos/"></upload>
  </div>
</template>

<script>
  import Upload from '@/components/upload/upload'

  export default {
    components: {
      Upload
    }
  }
</script>

<style scoped>
.container{
  padding: 20px;
}
</style>
