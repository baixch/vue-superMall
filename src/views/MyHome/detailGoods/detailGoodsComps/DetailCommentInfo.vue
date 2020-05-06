<template>
  <div class="comment" v-if="commentInfo.cRate != 0">
    <div class="comment-top">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-content" v-if="commentInfo.list != undefined">
      <div class="user-info">
        <img :src="commentInfo.list[0].user.avatar" alt="" />
        <span>{{ commentInfo.list[0].user.uname }}</span>
      </div>
      <div class="content-info">
        <span>{{ commentInfo.list[0].content }}</span>
        <span>{{ commentInfo.list[0].created | dateFormat }}</span>
        <span>{{ commentInfo.list[0].style }}</span>
      </div>
      <div class="content-img" v-if="commentInfo.list[0].images != undefined">
        <img
          v-for="(item, index) in commentInfo.list[0].images"
          :key="index"
          :src="item"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js";
export default {
  name: "detailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default: {}
    }
  },
  filters: {
    dateFormat() {
      formatDate();
      return new Date().Format("yyyy-MM-dd hh:mm:ss");
    }
  }
};
</script>
<style scoped>
.comment {
  border-top: 8px solid rgb(240, 240, 240);
  border-bottom: 8px solid rgb(240, 240, 240);
  color: var(--black-100-color);
  font-size: 18px;
  padding-bottom: 15px;
  margin-bottom: 10px;
}
.comment-top {
  margin: 0 10px;
  height: 50px;
  line-height: 50px;
  border-bottom: 3px solid rgb(240, 240, 240);
  /* background-color: red; */
}
.comment-top span:nth-child(2) {
  float: right;
  /* font-size: 18px; */
}
.comment-content {
  margin: 0 10px;
}
.user-info {
  margin: 10px 0;
  display: flex;
  align-items: center;
  /* height: 80px;
  line-height: 80px; */
}
.user-info img {
  border-radius: 50%;
  width: 50px;
  /* margin-top: 20px; */
}
.user-info span {
  margin-left: 10px;
}
.content-info span {
  font-size: 16px;
  color: var(--black-200-color);
}
.content-info span:nth-child(1) {
  display: inline-block;
  color: var(--black-150-color);
}
.content-info span:nth-child(3) {
  margin-left: 10px;
}
.content-img {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 5px 0;
}
.content-img img {
  width: 90px;
  height: 80px;
  margin-left: 5px;
}
</style>