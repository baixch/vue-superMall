<template>
  <div class="detail">
    <detail-nav-bar @goBack="goBack"> </detail-nav-bar>
    <better-scroll ref="scroll">
      <my-swiper :banners="banners" :isHeight="true" />
      <detail-base-info :baseInfoData="baseInfoData"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfoData"></detail-shop-info>
      <detail-image-info
        :detailInfo="detailInfo"
        @scrollToRefresh="scrollToRefresh"
      ></detail-image-info>
      <detail-param-info :itemParam="itemParam"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
      <my-goods-list :listArr="recommendData"></my-goods-list>
    </better-scroll>
  </div>
</template>

<script>
import { getDetailGoodsData, getDetailRecommendData } from "networks/home.js";
import { DetailGoodsBaseData } from "dataConfig/detailGoods/detailGoods.js";
import BetterScroll from "components/commons/bscroll/BetterScroll";
import DetailNavBar from "./DetailNavBar";
import MySwiper from "components/contents/swiper/MySwiper";
import DetailBaseInfo from "./detailGoodsComps/DetailBaseInfo";
import DetailShopInfo from "./detailGoodsComps/DetailShopInfo";
import DetailImageInfo from "./detailGoodsComps/DetailImageInfo";
import DetailParamInfo from "./detailGoodsComps/DetailParamInfo";
import DetailCommentInfo from "./detailGoodsComps/DetailCommentInfo";
import MyGoodsList from "components/contents/myGoodsList/MyGoodsList";
export default {
  name: "detail",
  components: {
    BetterScroll,
    DetailNavBar,
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
      recommendData: []
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailData();
  },
  computed: {},
  updated() {},
  methods: {
    scrollToRefresh() {
      this.$refs.scroll.refresh();
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
    goBack() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.detail {
  background-color: antiquewhite;
}
</style>