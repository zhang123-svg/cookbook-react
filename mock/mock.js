// 入口文件

// nodejs的语法
// 引入 使用require引入的时候 实际上是在加载模块的exports属性
const swipper = require('./swipper.json')
const hotcate = require('./hotcate.json')
const getlist = require('./cookbook-list.json')
const category = require('./cookbook-category.json')



// 导出
module.exports = () => {
    return {
        swipper: swipper,
        hotcate: hotcate,
        getlist: getlist,
        category,
    }
}