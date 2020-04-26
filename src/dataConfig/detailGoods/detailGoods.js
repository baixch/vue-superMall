
export class DetailGoodsBaseData {
    constructor(itemInfo, shopInfo, columns) {
        this.title = itemInfo.title
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discountDesc = itemInfo.discountDesc
        this.discountBgColor = itemInfo.discountBgColor
        this.salveNum = columns[0]
        this.collect = columns[1]
        this.serviceType = shopInfo.services[shopInfo.services.length - 1]
        this.services = shopInfo.services
    }

};
export class DetailGoodsShopInfo {
    constructor(itemInfo, shopInfo, columns) {
        this.title = itemInfo.title
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discountDesc = itemInfo.discountDesc
        this.discountBgColor = itemInfo.discountBgColor
        this.salveNum = columns[0]
        this.collect = columns[1]
        this.serviceType = shopInfo.services[shopInfo.services.length - 1]
        this.services = shopInfo.services
    }

};