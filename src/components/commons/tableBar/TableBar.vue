<template>
  <div class="tablebar">
    <slot name="tabbar_item"> </slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.tablebar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: rgb(230, 230, 230);
  display: flex;
  justify-content: space-around;
}
</style>
