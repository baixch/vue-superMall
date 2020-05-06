<template>
  <div class="home">
    <nav-bar class="nav">
      <template slot="content">
        <span>购物街</span>
      </template>
    </nav-bar>
    <tab-control
      class="tab-conntrol"
      ref="tabControl1"
      :titleArr="tabControlData"
      v-show="tabIsShow"
      @tabControlChange="tabControlChange"
    />
    <better-scroll
      ref="scroll"
      :probeTypeNum="2"
      @scrollPosition="scrollPosition"
      :isUpLoad="true"
      @pullingUp="pullingUp"
    >
      <my-swiper class="swiper-container" :banners="banners" />
      <my-recommend :recommend="recommend"></my-recommend>
      <popurlar-goods :dataArr="popurlarData"></popurlar-goods>
      <tab-control
        ref="tabControl2"
        :titleArr="tabControlData"
        @tabControlChange="tabControlChange"
      />
      <my-goods-list :listArr="goodsList"></my-goods-list>
    </better-scroll>
    <back-top-btn
      v-show="isShowBackTop"
      @click.native="backClick()"
    ></back-top-btn>
  </div>
</template>

<script>
import BetterScroll from "components/commons/bscroll/BetterScroll";
import NavBar from "components/commons/navigation/Navigation";
import MySwiper from "components/contents/swiper/MySwiper";
import MyRecommend from "./homeChildComps/MyRecommend";
import DetailGoods from "./detailGoods/DetailGoods";
import PopurlarGoods from "components/contents/popurlar/PopurlarGoods";
import TabControl from "components/contents/tabControl/TabControl";
import MyGoodsList from "components/contents/myGoodsList/MyGoodsList";
import BackTopBtn from "components/commons/backTop/BackTopBtn";
import "swiper/css/swiper.css";
import { getHomeRequestData, getHomeGoodsData } from "@/networks/home.js";
import { clearTimeout } from "timers";
import { debounce } from "common/utils.js";

export default {
  name: "home",
  components: {
    BetterScroll,
    NavBar,
    MySwiper,
    MyRecommend,
    PopurlarGoods,
    TabControl,
    MyGoodsList,
    BackTopBtn,
    DetailGoods
  },
  data() {
    return {
      height: "200px",
      banners: [],
      recommend: [],
      currentType: "pop",
      isShowBackTop: false,
      tabControlTop: 0,
      tabIsShow: false,
      saveY: 0,
      tabControlData: [
        { id: 0, title: "流行" },
        { id: 1, title: "新款" },
        { id: 2, title: "精选" }
      ],
      goodsData: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      goodsList: [],
      popurlarData: [
        {
          acm: "32.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
          link:
            "http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
          sort: 1,
          title: "\u5341\u70b9\u62a2\u5238"
        },
        {
          acm: "33.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
          link:
            "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
          sort: 2,
          title: "\u597d\u7269\u7279\u5356"
        },
        {
          acm: "34.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",
          link:
            "http://act.meilishuo.com/neigouful001?acm=3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119",
          sort: 3,
          title: "\u5185\u8d2d\u798f\u5229"
        },
        {
          acm: "35.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
          link:
            "http://act.meilishuo.com/wap/yxzc1?acm=3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119",
          sort: 4,
          title: "\u521d\u79cb\u4e0a\u65b0"
        },
        {
          acm: "36.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
          link:
            "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
          sort: 2,
          title: "\u597d\u7269\u7279\u5356"
        }
      ]
    };
  },
  computed: {},
  created() {
    this.getHomeRequest();
    this.getHomeGoods("pop");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on("imageLoaded", () => {
      console.log("----myhome  refresh-----");
      refresh();
    });

    this.$bus.$on("swiperImgLoad", () => {
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
      console.log(this.tabControlTop);
    });
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollToTop(0, this.saveY, 0);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },
  methods: {
    getHomeRequest() {
      getHomeRequestData().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let page = this.goodsData[type].page + 1;
      console.log(page);
      getHomeGoodsData(type, page).then(res => {
        this.goodsData[type].list.push(...res.data.list);
        this.goodsList = this.goodsData[type].list;
        this.goodsData[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
    tabControlChange(index) {
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      this.currentType = index == 0 ? "pop" : index == 1 ? "new" : "sell";
      this.goodsData[this.currentType].page = 0;
      this.goodsData[this.currentType].list = [];
      this.getHomeGoods(this.currentType);
    },
    pullingUp() {
      this.getHomeGoods(this.currentType);
    },
    scrollPosition(position) {
      this.isShowBackTop = position.y < -1000;
      this.tabIsShow = position.y < -this.tabControlTop - 44;
    },
    backClick() {
      this.$refs.scroll.scrollToTop(0, 0);
      this.isShowBackTop = false;
    }
  }
};
</script>
<style scoped>
.home {
  position: relative;
  height: 100%;
}

.nav {
  background-color: palevioletred;
  color: white;
  position: fixed;
  z-index: 999;
}
.tab-conntrol {
  position: fixed;
  top: 44px;
  z-index: 9;
}
.swiper-container {
  margin-top: 44px;
}
</style>