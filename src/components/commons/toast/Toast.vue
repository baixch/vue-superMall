<template>
  <div class="toast" v-show="isShow">
    <span>{{ message }}</span>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "toast",
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    show(message, delay = 1500) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, delay);
    }
  }
};
</script>
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 10px 20px;
  transform: translate(-50%, -50%);
  z-index: 999;
  /* text-align: center; */
  border-radius: 5%;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>