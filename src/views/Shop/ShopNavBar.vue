<template>
  <div>
    <Navigation class="nav1">
      <template slot="content">
        <span>购物车({{ $store.getters.cartGoods.length }})</span>
      </template>
    </Navigation>
  </div>
</template>

<script>
import Navigation from "components/commons/navigation/Navigation";
export default {
  name: "shopNavBar",
  components: {
    Navigation
  },
  props: {
    goodsNum: 0
  }
};
</script>
<style scoped>
.nav1 {
  background-color: palevioletred;
  color: white;
}
</style>