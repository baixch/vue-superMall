<template>
  <!-- <router-link :to="obj.path"> -->
  <div class="tablebar_item" @click="clickBtn(obj.path)">
    <div v-if="isSelect">
      <slot name="btn_img_h"> </slot>
    </div>
    <div v-else>
      <slot name="btn_img"> </slot>
    </div>
    <div :style="isSelectColor">
      <slot name="btn_title"> </slot>
    </div>
  </div>
  <!-- </router-link> -->
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    obj: {
      type: Object,
      default: []
    }
  },
  computed: {
    isSelect() {
      return this.$route.path.indexOf(this.obj.path) > -1;
    },
    isSelectColor() {
      return this.isSelect ? { color: this.obj.color } : {};
    }
  },
  methods: {
    clickBtn(path) {
      // console.log("----" + id)
      this.$router.replace(path);
      // this.$emit("btnClick", id)
    }
  }
};
</script>
<style scoped>
.tablebar_item {
  margin-top: 3px;
  width: 40px;
  height: 100%;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tablebar_item img {
  width: 28px;
  height: 28px;
  vertical-align: top;
}

.tablebar_item span {
  display: block;
  text-align: center;
  font-size: 13px;
}
</style>