<template>
  <div class="shop">
    <nav-bar></nav-bar>
    <better-scroll class="scroll" ref="scroll" :probeTypeNum="2">
      <shop-item v-for="item in cartGoods" :key="item.iid" :goodItem="item">
      </shop-item>
    </better-scroll>
    <settle-account></settle-account>
  </div>
</template>

<script>
import NavBar from "./ShopNavBar";
import BetterScroll from "components/commons/bscroll/BetterScroll";
import ShopItem from "./ShopItem";
import SettleAccount from "./SettleAccount";
import { log } from "util";
export default {
  name: "shop",
  components: {
    NavBar,
    BetterScroll,
    ShopItem,
    SettleAccount
  },
  activated() {},
  data() {
    return {
      cartGoods: []
    };
  },
  created() {
    this.cartGoods = this.$store.getters.cartGoods;
    console.log(this.cartGoods);
  }
};
</script>
<style scoped>
.shop {
  width: 100%;
  height: 100%;
  /* background-color: antiquewhite; */
}
.scroll {
  height: calc(100vh - 44px - 49px - 40px);
}
</style>