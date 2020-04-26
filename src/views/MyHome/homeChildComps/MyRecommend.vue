<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend" :key="item.acm">
      <a href="item.link">
        <img :src="item.image" width="70px" alt="70px" />
      </a>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommand",
  props: {
    recommend: {
      type: Array,
      defalut: []
    }
  }
};
</script>
<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  /* background-color: rebeccapurple; */
  padding: 15px 0 20px;
  font-size: 12px;
  border-bottom: 15px solid rgb(240, 240, 240);
}
.recommend span {
  display: inline-block;
  padding-top: 5px;
}
.recommend-item {
  flex: 1;
}
</style>