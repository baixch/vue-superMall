<template>
  <div>
    <Navigation>
      <template slot="leftBtn">
        <img class="back" src="~images/back.png" alt="" @click="backClick" />
      </template>
      <template slot="content">
        <div class="center">
          <div
            :class="{ selectItem: currentIndex == index }"
            v-for="(item, index) in titleArr"
            :key="index"
            @click="clickItem(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </Navigation>
  </div>
</template>

<script>
import Navigation from "components/commons/navigation/Navigation";

export default {
  name: "detailNav",
  data() {
    return {
      titleArr: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    Navigation
  },
  methods: {
    clickItem(index) {
      this.currentIndex = index;
      this.$emit("navItemClick", this.currentIndex);
    },
    backClick() {
      this.$emit("goBack");
    }
  }
};
</script>
<style scoped>
.center {
  height: 100%;
  display: flex;
  font-size: 14px;
}
.center div {
  flex: 1;
}
.selectItem {
  color: palevioletred;
}
.back {
  width: 30px;
  height: 30px;
  margin-top: 8px;
}
</style>