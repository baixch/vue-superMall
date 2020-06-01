<template>
  <div class="bottom-tool">
    <div class="item" v-for="(item, index) in imgArr" :key="index">
      <img :src="item.img" alt="" />
      <span>{{ item.title }}</span>
    </div>
    <div class="shopCar" @click="addCart()">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  name: "detailBottomTool",
  data() {
    return {
      imgArr: [
        { title: "客服", img: require("@/assets/images/home_h.png") },
        { title: "店铺", img: require("@/assets/images/shoucang.png") },
        { title: "收藏", img: require("@/assets/images/shoucang.png") }
      ]
    };
  },
  methods: {
    addCart() {
      this.$emit("addCart");
    }
  }
};
</script>
<style scoped>
.bottom-tool {
  display: flex;
  position: fixed;
  width: 100%;
  height: 49px;

  bottom: 0;
  font-size: 14px;
  /* background-color: red; */
  /* align-items: center; */
  text-align: center;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
  flex: 15%;
}
.shopCar {
  line-height: 49px;
  height: 100%;
  flex: 30%;
  background-color: yellow;
}
.buy {
  line-height: 49px;
  height: 100%;
  flex: 25%;
  background-color: palevioletred;
}
.bottom-tool img {
  /* display: inline-block; */
  width: 25px;
  /* height: 15px; */
}
</style>
