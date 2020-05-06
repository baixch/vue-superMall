import { request } from "./request.js"
export function getHomeRequestData() {
    return request({
        url: "/home/multidata"
    })
}
export function getHomeGoodsData(type, page) {
    return request({
        url: "/home/data",
        params: {
            type,
            page
        }
    })
}
export function getDetailGoodsData(iid) {
    return request({
        url: "/detail",
        params: {
            iid,
        }
    })
}
export function getDetailRecommendData() {
    return request({
        url: "/recommend",
    })
}