<template>
  <div class="navigation">
    <div class="left"><slot name="leftBtn"></slot></div>
    <div class="center"><slot name="content"></slot></div>
    <div class="right"><slot name="rightBtn"></slot></div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.navigation {
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0px 1px 1px rgb(230, 230, 230);
}
.left,
.right {
  width: 64px;
  height: 44px;
}
.center {
  flex: 1;
}
</style>