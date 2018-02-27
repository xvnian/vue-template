<template>
  <div class="cube-upload-btn">
    <slot>
      <div class="cube-upload-btn-def"><i></i></div>
    </slot>
    <input class="cube-upload-input" type="file" @change="changeHandler" :multiple="multiple" :accept="accept">
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-upload-btn'

  export default {
    name: COMPONENT_NAME,
    props: {
      multiple: {
        type: Boolean,
        default: true
      },
      accept: {
        type: String,
        default: 'image/*'
      }
    },
    methods: {
      changeHandler(e) {
        const fileEle = e.currentTarget
        const files = fileEle.files
        if (files) {
          this.$parent.addFiles(files)
          fileEle.value = null
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/mixin"
  .cube-upload-btn
    position: relative
    overflow: hidden
    &:active
      .cube-upload-btn-def
        background-color: #fff

  .cube-upload-input
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    width: 100%
    font-size: 0
    opacity: 0

  .cube-upload-btn-def
    position: relative
    width: 80px
    height: 80px
    box-sizing: border-box
    background-color: #fff
    box-shadow: 0 1px 3px rgba(0, 0, 0, .1)
    border-radius: 2px
    border-1px(#e5e5e5, 2px)
    > i
      &::before, &::after
        content: ""
        position: absolute
        top: 50%
        left: 50%
        width: 20px
        height: 2px
        transform: translate(-50%, -50%)
        background-color: #666
      &::after
        transform: translate(-50%, -50%) rotate(90deg)
</style>
