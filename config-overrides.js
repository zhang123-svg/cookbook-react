const path = require('path')


const { override,
     fixBabelImports,
      addWebpackResolve,
       addWebpackAlias,
       addDecoratorsLegacy
     } = require('customize-cra')

module.exports = override(
    fixBabelImports('import',{
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addWebpackResolve({
        extensions:[".js",".json",".jsx"]
    }),

    //给文件夹起别名
    addWebpackAlias({
            'assets': path.resolve(__dirname, 'src/assets/')
    }),
    addDecoratorsLegacy()

)