<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音" />
  </div>
</template>
<script>
export default {
  name: "CitySearch",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="stylus" scoped>
@import '~assets/styles/varibles'

.search
  background-color $bgColor
  height 0.72rem
  padding 0 0.1rem
  .search-input
    box-sizing border-box
    width 100%
    height 0.62rem
    line-height 0.62rem
    padding 0 0.1rem
    text-align center
    border-radius 0.06rem
    color #666
  // 改变input中placeholder字体颜色 h5属性
  input::-webkit-input-placeholder
    /* WebKit browsers */
    color #aaa
  input:-moz-placeholder
    /* Mozilla Firefox 4 to 18 */
    color #aaa
  input::-moz-placeholder
    /* Mozilla Firefox 19+ */
    color #aaa
  input:-ms-input-placeholder
    /* Internet Explorer 10+ */
    color #aaa
</style>