import BackTopBtn from "components/commons/backTop/BackTopBtn";

export const backTopMix = {
    components: {
        BackTopBtn
    },
    data() {
        return {
            isShowBackTop: false,
            tabIsShow: false,
        }
    },
    methods: {
        listenShowBackTop(position) {
            this.isShowBackTop = position.y < -1000;
        },
        backClick() {
            this.$refs.scroll.scrollToTop(0, 0);
            this.isShowBackTop = false;
        }
    }
}