<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <my-tab-bar></my-tab-bar>
  </div>
</template>
<script>
import MyTabBar from "components/contents/myTabBar/MyTabBar";

export default {
  data() {
    return {};
  },
  components: {
    MyTabBar
  },
  methods: {}
};
</script>>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>