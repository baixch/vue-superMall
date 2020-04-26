<template>
  <div class="popurlar">
    <div class="title">本周流行</div>
    <div class="pop-item" v-for="item in dataArr" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <span>{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "popurlar",
  props: {
    dataArr: {
      type: Array,
      default: []
    }
  }
};
</script>
<style scoped>
.popurlar {
  width: 100%;
  text-align: center;
  border-bottom: 15px solid rgb(240, 240, 240);
}
.popurlar::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.title {
  height: 40px;
  line-height: 40px;
}
.pop-item {
  float: left;
  width: 25%;
  /* width: 25%; */
  /* padding: 14% 0 14% 0; */
  text-align: center;
}
.popurlar img {
  width: 70px;
  height: 70px;
}
.popurlar span {
  display: inline-block;
  font-size: 12px;
  color: rgb(100, 100, 100);
}
</style>