<template>
  <div class="container">
    <div class="icons">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(page, index) in pages" :key="index">
          <div class="icon" v-for="item in page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl" alt="" />
            </div>
            <p class="icon-desc">{{ item.desc }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="other-info border-bottom">
      <div class="location flex-item">
        <span class="iconfont">&#xe683;</span>
        北京
      </div>
      <div class="billboard flex-item">
        <span class="iconfont">&#xe642;</span>
        必游榜单
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      swiperOptions: {
        autoplay: false,
      },
    };
  },
  props: {
    iconList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
  methods: {},
};
</script>
<style lang="stylus" scoped>
@import '~assets/styles/varibles.styl'
@import '~assets/styles/mixins.styl'

.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icons
  box-shadow 0 0.01rem 0.1rem 0.04rem #f3f3f1
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.34rem
      box-sizing border-box
      padding 0.3rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0.1rem
      height 0.44rem
      line-height 0.44rem
      text-align center
      color $darkTextColor
      ellipsis()
.other-info
  display flex
  padding 0.2rem
  .flex-item
    flex 1
    text-align center
    padding 0.06rem
  .location
    border-right 0.04rem solid #f3f3f1
</style>
