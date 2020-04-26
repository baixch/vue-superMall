<template>
  <div>
    <swiper
      :class="{ swiperContainer: isHeight }"
      ref="mySwiper"
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
    >
      <swiper-slide v-for="item in banners" :key="item.acm">
        <img :src="item.image" width="100%" alt="" @load="imgLoaded" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
export default {
  name: "MySwiper",
  components: {
    Swiper,
    SwiperSlide
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(0, 1000, true);
  },
  props: {
    isHeight: false,
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isImgLoad: false,
      swiperOptions: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        },
        autoplay: {
          delay: 1500,

          stopOnLastSlide: false,

          disableOnInteraction: false
        }
        // Some Swiper option/callback...
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  methods: {
    imgLoaded() {
      if (!this.isImgLoad) {
        this.$bus.$emit("swiperImgLoad");
        this.isImgLoad = true;
      }
    }
  }
};
</script>
<style scoped>
.swiperContainer {
  height: 300px;
}
</style>