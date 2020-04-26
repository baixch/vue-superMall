<template>
  <div class="detail-shop-info">
    <div class="logo">
      <img :src="shopInfo.shopLogo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop-info">
      <div class="cShell">
        <p>{{ shopInfo.cSells }}</p>
        <p>总销量</p>
      </div>
      <div class="cGoods">
        <p>{{ shopInfo.cGoods }}</p>
        <p>全部宝贝</p>
      </div>
      <div class="goods-desc">
        <div
          class="desc-info"
          v-for="(item, index) in shopInfo.score"
          :key="index"
        >
          <span>{{ item.name }}</span>
          <span class="score" :style="isBetterColor(item.isBetter)">{{
            item.score
          }}</span>
          <span :class="{ isRed: item.isBetter, isGreen: !item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
    <div class="btn"><input type="button" value="进店逛逛" id="" /></div>
  </div>
</template>

<script>
export default {
  name: "detailShop",
  props: {
    shopInfo: {}
  },
  computed: {
    isBetterColor() {
      return isBetter => {
        return isBetter ? { color: "red" } : { color: "green" };
      };
    }
  }
};
</script>
<style scoped>
.detail-shop-info {
  padding-bottom: 20px;
}
.logo {
  display: flex;
  height: 70px;
  align-items: center;
}
.logo img {
  margin-left: 10px;
  width: 30px;
}
.logo span {
  margin-left: 10px;
  color: rgb(100, 100, 100);
}
.shop-info {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgb(50, 50, 50);
}
.cShell {
  /* display: flex;
  align-items: center; */
  text-align: center;
  flex: 25%;
}
.cGoods {
  flex: 25%;
  text-align: center;
  height: 40px;
  border-right: 1px solid rgb(50, 50, 50);
}
.goods-desc {
  flex: 50%;
  padding-left: 30px;
}
.desc-info {
  margin-top: 5px;
}
.score {
  margin-left: 5px;
}
.isRed {
  background-color: red;
  margin-right: 22px;
  float: right;
}
.isGreen {
  background-color: green;
  margin-right: 22px;
  float: right;
}
.btn {
  margin-top: 20px;
  text-align: center;
}
.btn input {
  background-color: rgb(240, 240, 240);
  padding: 3px 25px 3px;
  border-radius: 10%;
  border: 0;
}
</style>