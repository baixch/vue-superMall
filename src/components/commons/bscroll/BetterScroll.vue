<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "better-scroll",
  props: {
    probeTypeNum: 0,
    isUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.scroll, {
      click: true,
      probeType: this.probeTypeNum,
      // pullDownRefresh: {
      //   threshold: 20,
      //   stop: 0
      // },
      pullUpLoad: this.isUpLoad
    });
    console.log(this.scroll);

    this.scroll &&
      this.scroll.on("scroll", position => {
        this.$emit("scrollPosition", position);
      });
    // this.scroll.on("pullingDown", () => {
    //   this.$emit("pullingDown");
    //   this.scroll.finishPullDown();
    // });
    this.scroll &&
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
  },
  methods: {
    scrollToTop(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
    refresh() {
      console.log("--refresh---");

      this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    }
  }
};
</script>
<style scoped>
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>