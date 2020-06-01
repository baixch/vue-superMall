<template>
  <div class="detail">
    <detail-nav-bar ref="nav" @goBack="goBack" @navItemClick="navItemClick">
    </detail-nav-bar>
    <better-scroll
      ref="scroll"
      @scrollPosition="scrollPosition"
      :probeTypeNum="2"
    >
      <my-swiper :banners="banners" :isHeight="true" />
      <detail-base-info :baseInfoData="baseInfoData"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfoData"></detail-shop-info>
      <detail-image-info
        ref="goodsDom"
        :detailInfo="detailInfo"
        @scrollToRefresh="scrollToRefresh"
      ></detail-image-info>
      <detail-param-info
        ref="paramDom"
        :itemParam="itemParam"
      ></detail-param-info>
      <detail-comment-info
        ref="commentDom"
        :commentInfo="commentInfo"
      ></detail-comment-info>
      <my-goods-list
        ref="recommendDom"
        :listArr="recommendData"
      ></my-goods-list>
    </better-scroll>
    <detail-bottom-tool @addCart="addtToCart"></detail-bottom-tool>
    <back-top-btn
      v-show="isShowBackTop"
      @click.native="backClick()"
    ></back-top-btn>
  </div>
</template>

<script>
import { getDetailGoodsData, getDetailRecommendData } from "networks/home.js";
import { DetailGoodsBaseData } from "dataConfig/detailGoods/detailGoods.js";
import { debounce } from "common/utils.js";
import BetterScroll from "components/commons/bscroll/BetterScroll";
import DetailNavBar from "./DetailNavBar";
import DetailBottomTool from "./DetailBottomTool";
import MySwiper from "components/contents/swiper/MySwiper";
import DetailBaseInfo from "./detailGoodsComps/DetailBaseInfo";
import DetailShopInfo from "./detailGoodsComps/DetailShopInfo";
import DetailImageInfo from "./detailGoodsComps/DetailImageInfo";
import DetailParamInfo from "./detailGoodsComps/DetailParamInfo";
import DetailCommentInfo from "./detailGoodsComps/DetailCommentInfo";
import MyGoodsList from "components/contents/myGoodsList/MyGoodsList";
import { backTopMix } from "common/mixin.js";
export default {
  name: "detail",
  components: {
    BetterScroll,
    DetailNavBar,
    DetailBottomTool,
    MySwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamInfo,
    DetailCommentInfo,
    MyGoodsList
  },
  data() {
    return {
      height: "300px",
      iid: "",
      banners: [],
      baseInfoData: {},
      shopInfoData: {},
      detailInfo: {},
      itemParam: {},
      commentInfo: {},
      recommendData: [],
      theItemTops: [],
      getItemTop: null,
      currentIndex: 0
    };
  },
  mixins: [backTopMix],
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailData();
    this.getItemTop = debounce(() => {
      this.theItemTops = [];
      this.theItemTops.push(0);
      this.theItemTops.push(this.$refs.paramDom.$el.offsetTop);
      this.theItemTops.push(this.$refs.commentDom.$el.offsetTop);
      this.theItemTops.push(this.$refs.recommendDom.$el.offsetTop);
      this.theItemTops.push(Number.MAX_VALUE);
      console.log(this.theItemTops);
    });
  },
  computed: {},
  updated() {},
  methods: {
    scrollToRefresh() {
      this.$refs.scroll.refresh();
      this.getItemTop();
    },
    getDetailData() {
      getDetailGoodsData(this.iid).then(res => {
        console.log(res);
        const result = res.result;
        this.banners = this.getBanners(result.itemInfo.topImages);

        this.baseInfoData = new DetailGoodsBaseData(
          result.itemInfo,
          result.shopInfo,
          result.columns
        );
        this.shopInfoData = result.shopInfo;
        this.detailInfo = result.detailInfo;
        this.itemParam = result.itemParams;
        this.commentInfo = result.rate;
        console.log(this.commentInfo);
      });
      getDetailRecommendData().then(res => {
        this.recommendData = res.data.list;
        console.log(res.data.list);
      });
    },
    getBanners(arr) {
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        let obj = {};
        obj.acm = 10000 + i;
        obj.image = arr[i];
        newArr.push(obj);
      }
      return newArr;
    },
    navItemClick(index) {
      this.$refs.scroll.scrollToTop(0, -this.theItemTops[index]);
    },
    scrollPosition(position) {
      let positionY = -position.y;
      const length = this.theItemTops.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex != i &&
          (positionY >= this.theItemTops[i] &&
            positionY < this.theItemTops[i + 1])
        ) {
          console.log("i=====" + i);
          this.currentIndex = i;
          this.$refs.nav.currentIndex = i;
        }
      }
      this.listenShowBackTop(position);
    },
    addtToCart() {
      let cartGood = {
        iid: this.iid,
        image: this.banners[0].image,
        title: this.baseInfoData.title,
        desc: this.baseInfoData.desc,
        price: this.baseInfoData.realPrice,
        count: 0,
        checked: false
      };
      this.$store.dispatch("addToCart", cartGood).then(msg => {
        console.log(msg);
        // console.log(this);

        this.$toast.show(msg);
      });
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.detail {
  position: relative;
  height: 100vh;
  z-index: 1;
  background-color: white;
}
</style>