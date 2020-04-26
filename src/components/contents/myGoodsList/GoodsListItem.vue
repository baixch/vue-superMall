<template>
  <div class="list-item" @click="goToDetail">
    <img :src="itemObj.show.img" alt="" @load="imageLoaded" />
    <div class="list-info">
      <p>{{ itemObj.title }}</p>
      <span>{{ itemObj.price }}</span>
      <span>{{ itemObj.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodItem",
  props: {
    itemObj: {
      type: Object,
      default: {}
    }
  },
  methods: {
    imageLoaded() {
      this.$bus.$emit("imageLoaded");
    },
    goToDetail() {
      this.$router.push("/detail/" + this.itemObj.iid);
    }
  }
};
</script>
<style scoped>
.list-item {
  width: 48%;
  position: relative;
  padding-bottom: 50px;
}
.list-item a {
  text-decoration: none;
}
.list-item img {
  position: relative;
  width: 100%;
  border-radius: 5px;
}
.list-info {
  position: absolute;
  width: 100%;
  color: rgb(100, 100, 100);
  text-align: center;
  left: 0;
  bottom: 5px;
}
.list-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list-info span:nth-child(2) {
  color: palevioletred;
}
.list-info span:nth-child(3) {
  margin-left: 5px;
}
.list-info span:nth-child(2)::after {
  display: inline-block;
  content: "";
  width: 15px;
  height: 15px;
  margin-left: 5px;
  background-image: url("~images/shoucang.png");
  background-size: cover;
}
</style>