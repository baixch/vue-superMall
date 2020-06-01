import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    cartGoods: [],
    totleNum: 0,
    totlePrice: 0,
}
const getters = {
    cartGoods(state) {
        return state.cartGoods
    },
    getTotlePrice(state) {
        return state.totlePrice
    },
    getTotleNum(state) {
        return state.totleNum
    },
    getTotleChecked(state) {
        return state.checkTotle
    },
}
const mutations = {
    addCount(state, oldGood) {
        oldGood.count += 1;
    },
    addToCart(state, payload) {
        payload.count = 1;
        state.cartGoods.push(payload)
    }
}
const actions = {
    addToCart(context, payload) {
        return new Promise((resolve, reject) => {
            console.log(payload);
            let oldGood = context.state.cartGoods.find(item => item.iid == payload.iid)
            if (oldGood) {
                context.commit('addCount', oldGood)
                resolve("添加的商品加1")
            } else {
                context.commit('addToCart', payload)
                resolve("添加新的商品")
            }
        })
    },
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});