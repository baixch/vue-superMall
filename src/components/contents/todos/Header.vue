<template>
  <div>
    <header class="header">
      <h1>待办事项</h1>
      <div class="nav">
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </header>
  </div>
</template>>
<script>
  export default {

  };
</script>>
<style scoped>
  .header {
    background: gray;
    color: aliceblue;
    padding: 10px;
    text-align: center;
  }

  .header a {
    padding-left: 5px;
    color: #fff;
    text-decoration: none;
  }
</style>>