const path = require('path');//引入path模块
function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))
            .set('images', resolve('src/assets/images'))
            .set('networks', resolve('src/networks'))
            .set('dataConfig', resolve('src/dataConfig'))
        //set第一个参数：设置的别名，第二个参数：设置的路径

    }
}