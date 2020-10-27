<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  data() {
    return {};
  },
  props: {
    recommendList: {
      type: Array,
      defalut: [],
    },
  },
  methods: {},
};
</script>
<style lang="stylus" scoped>
@import '~assets/styles/mixins'

.title
  line-height 0.8rem
  text-indent 0.2rem
  font-weight 550
  background-color #f4f4f3
.item
  overflow hidden
  display flex
  height 1.9rem
  padding 0.1rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding-right 0.1rem
  .item-info
    flex 1
    padding 0.1rem
    min-width 0
    .item-title
      line-height 0.54rem
      font-size 0.32rem
      ellipsis()
    .item-desc
      line-height 0.46rem
      color #a6a6a5
      ellipsis()
    .item-button
      line-height 0.44rem
      margin-top 0.16rem
      background-color #fa8231
      padding 0 0.2rem
      border-radius 0.1rem
      color #fff
</style>