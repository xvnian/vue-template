<template>
  <div>
    <button>test</button>
  </div>
</template>

<script>
  // import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs'
  // import { map, filter, switchMap } from 'rxjs/operators';
  //

  export default {
    name: 'rxjs',
    created() {

    },
    mounted() {
      // var observable = Rx.Observable.create(function subscribe(observer) {
      //   observer.next(1);
      //   observer.next(2);
      //   observer.next(3);
      //   observer.complete();
      //   observer.next(4); // 因为违反规约，所以不会发送
      // });
      //
      // observable.subscribe(x => console.log(x));
      //
      // observable.subscribe(x => console.log(x * 2));


      // var observable = Rx.Observable.create(function subscribe(observer) {
      //   var id = setInterval(() => {
      //     observer.next('hi')
      //   }, 1000);
      // });
      //
      // observable.subscribe(x => console.log(x));

      // var observable = Rx.Observable.create(function (observer) {
      //   observer.next(1);
      //   observer.next(2);
      //   observer.next(3);
      //   setTimeout(() => {
      //     observer.next(4);
      //     observer.complete();
      //   }, 1000);
      // });
      //
      // console.log('just before subscribe');
      // observable.subscribe({
      //   next: x => console.log('got value ' + x),
      //   error: err => console.error('something wrong occurred: ' + err),
      //   complete: () => console.log('done'),
      // });
      // console.log('just after subscribe');


      // var foo = Rx.Observable.create(function (observer) {
      //   console.log('Hello');
      //   observer.next(42);
      //   observer.next(100); // “返回”另外一个值
      //   observer.next(200); // 还可以再“返回”值
      // });
      //
      // console.log('before');
      // foo.subscribe(function (x) {
      //   console.log(x);
      // });
      // console.log('after');
    }
  }
</script>

<style scoped>

</style>
