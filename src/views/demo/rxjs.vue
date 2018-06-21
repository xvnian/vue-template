<template>
  <div>
    <button>test</button>
  </div>
</template>

<script>
  import {Observable} from 'rxjs/Observable';
  import 'rxjs/add/observable/of';
  import 'rxjs/add/operator/map';

  Observable.of(1, 2, 3).map(x => x + '!!!');

  export default {
    name: 'rxjs',
    created() {
    }
  }
</script>

<style scoped>

</style>
