<template>
  <div>
    <div class="goodItem" v-if="goodItem !== undefined">
      <div class="check-box">
        <input
          ref="checkbox"
          type="checkbox"
          name="good"
          id="good1"
          :checked="goodItem.checked"
          @click="checkClick(this)"
        />
      </div>
      <img :src="goodItem.image" alt="" />
      <div class="info">
        <div>{{ goodItem.title }}</div>
        <div>{{ goodItem.desc }}</div>
        <div>
          <span class="price">{{ getPrice }}</span>
          <span class="count">{{ getCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {} from "store/index.js";
import { mapGetters } from "vuex";
export default {
  name: "shopItem",
  props: {
    goodItem: {}
  },
  data() {
    return {
      totlePrice: 0
    };
  },
  computed: {
    ...mapGetters(["cartGoods"]),
    getPrice() {
      return "￥" + this.goodItem.price;
    },
    getCount() {
      return "x" + this.goodItem.count;
    }
  },
  methods: {
    checkClick(obj) {
      this.goodItem.checked = !this.goodItem.checked;
    }
  }
};
</script>
<style scoped>
.goodItem {
  display: flex;
  align-items: center;
  height: 130px;
  border-bottom: 1px solid var(--black-100-color);
}
.check-box {
  margin: 0 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
}
.goodItem input {
  width: 20px;
  height: 20px;
  /* opacity: 0; */
  border: 1px solid black;
}
.goodItem img {
  width: 100px;
  height: 110px;
  border-radius: 5%;
}
.info {
  height: 100%;
  width: 280px;
  /* display: flex;
  flex-direction: column; */
}
.info div:nth-child(1) {
  margin: 10px 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 20px;
}
.info div:nth-child(2) {
  margin: 20px 10px;
  color: var(--black-50-color);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.info div:nth-child(3) {
  margin-left: 10px;
}
.price {
  color: chocolate;
}
.count {
  float: right;
  margin-right: 10px;
}
</style>