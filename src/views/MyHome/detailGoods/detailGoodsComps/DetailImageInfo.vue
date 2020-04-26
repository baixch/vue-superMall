<template>
  <div class="detail-info">
    <div class="detail-desc">
      {{ detailInfo.desc }}
    </div>
    <div v-for="(item, index) in detailInfo.detailImage" :key="index">
      <span>{{ item.key }}</span>
      <img
        v-for="(img, index) in item.list"
        :key="index"
        :src="img"
        @load="imgLoaded"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "detailImageInfo",
  data() {
    return {
      imgLength: 0
    };
  },
  props: {
    detailInfo: {}
  },
  methods: {
    imgLoaded() {
      //   this.$emit("scrollToRefresh");
      this.imgLength++;
      if (this.imgLength == this.detailInfo.detailImage[0].list.length) {
        this.$emit("scrollToRefresh");
        this.imgLength = 0;
      }
    }
  }
};
</script>
<style scoped>
.detail-info {
  margin: 0 10px;
  color: var(--black-100-color);
}
.detail-desc {
  padding: 20px 0;
  border-top: 5px solid var(--black-230-color);
}
.detail-info span {
  font-size: 18px;
  color: var(--black-50-color);
}
.detail-info img {
  width: 100%;
}
</style>