<template>
  <div>
    <table-bar>
      <template slot="tabbar_item">
        <tab-bar-item v-for="item in btnArr" :key="item.id" :obj="item">
          <template slot="btn_img_h">
            <img :src="item.img_h" alt="" />
          </template>
          <template slot="btn_img">
            <img :src="item.img" alt="" />
          </template>
          <template slot="btn_title">
            <span>{{ item.title }}</span>
          </template>
        </tab-bar-item>
      </template>
    </table-bar>
  </div>
</template>

<script>
import TableBar from "@/components/commons/tableBar/TableBar";
import TabBarItem from "@/components/commons/tableBar/TabBarItem";
export default {
  data() {
    return {
      btnArr: [
        {
          id: "0",
          img: require("@/assets/images/home.png"),
          img_h: require("@/assets/images/home_h.png"),
          title: "首页",
          path: "/MyHome",
          color: "palevioletred"
        },
        {
          id: "1",
          img: require("@/assets/images/class.png"),
          img_h: require("@/assets/images/class_h.png"),
          title: "分类",
          path: "/Class",
          color: "palevioletred"
        },
        {
          id: "2",
          img: require("@/assets/images/shop.png"),
          img_h: require("@/assets/images/shop_h.png"),
          title: "购物车",
          path: "/Shop",
          color: "palevioletred"
        },
        {
          id: "3",
          img: require("@/assets/images/person.png"),
          img_h: require("@/assets/images/person_h.png"),
          title: "我的",
          path: "/Person",
          color: "palevioletred"
        }
      ]
    };
  },
  components: {
    TableBar,
    TabBarItem
  }
};
</script>
<style scoped>
</style>