<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="stylus" scoped>
@import '~assets/styles/varibles.styl'

/* 1rem = hrml font-size = 50px reset.css中已指定 */
.nav-bar
  display flex
  background-color $bgColor
  height $headerHeight
  line-height $headerHeight
  text-align center
  box-shadow 0 1px 1px rgba(100, 100, 100, 0.1)
.left
  width 0.86rem
.center
  flex 1
.right
  width 1.24rem
</style>