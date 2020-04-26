<template>
  <div class="goods-list">
    <goods-list-item v-for="item in listArr" :key="item.acm" :itemObj="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "MyGoodsList",
  props: {
    listArr: {
      type: Array,
      default: []
    }
  },
  created() {
    console.log("-----" + this.listArr);
  },
  components: {
    GoodsListItem
  }
};
</script>
<style scoped>
.goods-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>