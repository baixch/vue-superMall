<template>
  <div class="baseInfo" v-if="baseInfoData.serviceType">
    <span class="title">{{ baseInfoData.title }}</span>
    <div class="price-div">
      <span class="price">{{ baseInfoData.price }}</span>
      <span class="old-price">{{ baseInfoData.oldPrice }}</span>

      <span class="desc">{{ baseInfoData.discountDesc }}</span>
    </div>
    <div class="savle-desc">
      <span>{{ baseInfoData.salveNum }}</span>
      <span>{{ baseInfoData.collect }}</span>
      <span>{{ baseInfoData.serviceType.name }}</span>
    </div>
    <div class="services">
      <span>
        <img :src="baseInfoData.services[0].icon" alt="" />{{
          baseInfoData.services[0].name
        }}</span
      >

      <span>
        <img :src="baseInfoData.services[0].icon" alt="" />{{
          baseInfoData.services[1].name
        }}</span
      >
      <span>
        <img :src="baseInfoData.services[0].icon" alt="" />{{
          baseInfoData.services[2].name
        }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {
      // baseInfoData: {}
    };
  },
  props: {
    baseInfoData: {
      type: Object,
      default: {}
    }
  },
  updated() {},
  created() {}
};
</script>
<style scoped>
.title {
  display: inline-block;
  font-size: 18px;
  color: rgb(50, 50, 50);
  padding: 5px 5px 0;
}
.price-div {
  display: flex;
  align-items: center;
  margin: 8px 0 12px 0;
  padding: 0 5px;
}
.price {
  font-size: 20px;
  color: palevioletred;
}
.old-price {
  padding-left: 5px;
  font-size: 10px;
  text-decoration: line-through;
}
.desc {
  background-color: palevioletred;
  color: white;
  border-radius: 10px;
  font-size: 12px;
  padding: 2px 6px;
  margin-top: -11px;
  margin-left: 5px;
}
.savle-desc {
  display: flex;
  justify-content: space-between;
  color: rgb(150, 150, 150);
  font-size: 14px;
  padding: 0 5px 10px;
  /* border-bottom: 1px solid rgb(200, 200, 200); */
}
.services {
  margin: 0 5px;
  padding: 20px 0;
  border-top: 1px solid rgb(200, 200, 200);
  border-bottom: 1px solid rgb(200, 200, 200);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(150, 150, 150);
  font-size: 14px;
}
.services span {
  display: flex;
}
.services img {
  width: 13px;
  height: 13px;
  margin-top: 3px;
}
</style>