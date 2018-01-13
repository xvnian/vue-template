import Vue from 'vue'
import Test from '@/components/test/test'

describe('test.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Test)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .to.equal('hello world')
  })
})
