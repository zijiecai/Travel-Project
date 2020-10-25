<template>
  <div class="header">
    <nav-bar>
      <div slot="left" class="left">
        <span class="iconfont back-icon">&#xe6c3;</span>
      </div>
      <div slot="center" class="center">
        <span class="iconfont">&#xe63f;</span>
        <input
          class="search-input"
          type="text"
          placeholder="请输入城市/景点/游玩主题"
        />
      </div>
      <div slot="right" class="right">
        城市<span class="iconfont arrow-icon">&#xe647;</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";
export default {
  name: "HomeHeader",
  components: {
    NavBar,
  },
};
</script>

<style lang="stylus" scoped>
.left, .right
  color #fff
.left
  .back-icon
    font-size 0.4rem
.center
  display flex
  height 0.64rem
  line-height 0.64rem
  background-color #fff
  border-radius 0.1rem
  color #ccc
  margin-top 0.12rem
  padding-left 0.2rem
  text-align justify
.center .search-input
  flex 1
  height 0.64rem
  line-height 0.64rem
  padding-left 0.1rem
  border-radius 0.1rem
.search-input::-webkit-input-placeholder
  /* WebKit browsers */
  color #ccc
.search-input:-moz-placeholder
  /* Mozilla Firefox 4 to 18 */
  color #ccc
.search-input::-moz-placeholder
  /* Mozilla Firefox 19+ */
  color #ccc
.search-input:-ms-input-placeholder
  /* Internet Explorer 10+ */
  color #ccc
.right
  .arrow-icon
    font-size 0.24rem
</style>