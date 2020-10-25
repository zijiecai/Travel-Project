<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          title: "故宫",
          desc: "东方宫殿建筑代表，世界宫殿建筑典范",
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          title: "南山滑雪场",
          desc: "北京专业级滑雪圣地",
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
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
.title
  line-height 0.8rem
  text-indent 0.2rem
  font-weight 550
  background-color #f4f4f3
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 33.9%
  .item-img
    width 100%
.item-info
  flex 1
  padding 0.1rem
  .item-title
    line-height 0.54rem
    font-size 0.32rem
    ellipsis()
  .item-desc
    line-height 0.46rem
    color #a6a6a5
    ellipsis()
</style>