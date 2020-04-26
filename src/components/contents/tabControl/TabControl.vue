<template>
  <div class="tab">
    <div class="tab-item" v-for="(item, index) in titleArr" :key="index">
      <span
        :class="{
          normal_color: currentIndex != index,
          select_color: currentIndex == index
        }"
        @click="btnClick(index)"
        >{{ item.title }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titleArr: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    btnClick(index) {
      this.currentIndex = index;
      this.$emit("tabControlChange", index);
    }
  }
};
</script>
<style scoped>
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  background-color: white;
}
.tab-item {
  flex: 1;
  text-align: center;
}
.tab-item span {
  display: inline-block;
  padding: 5px 0;
}
.normal_color {
  color: rgb(100, 100, 100);
}
.select_color {
  color: palevioletred;
  border-bottom: 2px solid palevioletred;
}
</style>