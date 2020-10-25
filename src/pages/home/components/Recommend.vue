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
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
          title: "故宫",
          desc: "东方宫殿建筑代表，世界宫殿建筑典范",
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
          title: "南山滑雪场",
          desc: "北京专业级滑雪圣地",
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg",
          title: "天安门广场",
          desc: "我爱北京天安门，天安门上太阳升",
        },
      ],
    };
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