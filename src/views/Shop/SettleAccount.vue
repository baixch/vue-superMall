<template>
  <div class="settle">
    <div class="check-box">
      <input
        ref="checkbox"
        :checked="getTotleChecked"
        type="checkbox"
        @click="totleClick()"
      />
    </div>
    <span>全选</span>
    <span class="totile">
      合计:
    </span>
    <span>￥{{ getTotlePrice }}</span>
    <div class="computed">
      去计算<span>({{ getTotleNum }})</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { log } from "util";
export default {
  name: "settleAccount",
  data() {
    return {
      totleChecked: false
    };
  },
  computed: {
    ...mapGetters(["cartGoods"]),
    getTotleChecked() {
      if (this.cartGoods.length == 0) return false;
      return (this.totleChecked = !this.cartGoods.find(item => !item.checked));
    },
    getTotlePrice() {
      return this.cartGoods
        .filter(item => {
          return item.checked;
        })
        .reduce((temp, item) => {
          return temp + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    getTotleNum() {
      return this.cartGoods
        .filter(item => {
          return item.checked;
        })
        .reduce((temp, item) => {
          return temp + item.count;
        }, 0);
    }
  },

  methods: {
    totleClick() {
      if (this.totleChecked) {
        this.cartGoods.map(item => (item.checked = false));
      } else {
        this.cartGoods.map(item => (item.checked = true));
      }
    }
  }
};
</script>
<style scoped>
.settle {
  position: fixed;
  bottom: 49px;
  width: 100%;
  height: 40px;
  background-color: var(--black-200-color);
  display: flex;
  align-items: center;
  color: gray;
}
.check-box {
  margin: 0 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
}
.check-box input {
  width: 20px;
  height: 20px;
  /* opacity: 0; */
  border: 1px solid black;
}
.totile {
  margin-left: 30px;
  font-size: 18px;
  color: var(--black-100-color);
}
.computed {
  position: absolute;
  right: 0;
  width: 80px;
  height: 100%;
  text-align: center;
  line-height: 40px;
  color: white;
  background-color: chocolate;
}
</style>