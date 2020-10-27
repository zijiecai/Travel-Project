<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="景点图" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: {
      type: Array,
      requied: true,
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        autoplay: true,
        loop: true,
      },
    };
  },
  computed: {
    showSwiper() {
      return this.swiperList.length;
    },
  },
  methods: {},
};
</script>
<style lang="stylus" scoped>
.wrapper
  // 保证不会产生抖动（图片加载过程中产生的重绘）
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  .swiper-img
    width 100%
</style>