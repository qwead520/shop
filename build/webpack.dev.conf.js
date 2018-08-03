'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
// 模拟数据请求
const express = require('express')
var app = express()
var apiRoutes = express.Router()
apiRoutes.get('/StoreList/:id', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.json({
    code: 200,
    msg: 'success',
    pages:{
      DataCount: 666,
      pageCount: 10,
      pageNow: parseInt(req.query.page),
      pageLimit: parseInt(req.query.limit)
    },
    data: [{
      suppliers_id: 1,
      suppliers_name: 'SheLins成人用品品牌专卖店',
      suppliers_logo: 'http://m.renxingsong.cn/data/business_file/1532074542082432653.jpg',
      suppliers_banner: '',
      suppliers_desc: '本店主营女性AV棒，男性后庭，飞机杯，缩阴球等成人用品。品牌有LEVETT, SheLins， FUN-MATES and Sinjoys。\n' +
        '工厂直营销售，质量保证，价格实惠！',
      goods_list: [
        {
          goods_id: 1,
          goods_thumb: 'http://m.renxingsong.cn/images/201807/1532505035267320818.jpg',
          team_price: 19,
          shop_price: 25
        },
        {
          goods_id: 2,
          goods_thumb: 'http://m.renxingsong.cn/images/201807/1532504875743264310.jpg',
          team_price: 19,
          shop_price: 25
        }
      ]
    },
      {
        suppliers_id: 2,
        suppliers_name: '南极人日常用品品牌专卖店',
        suppliers_logo: 'http://m.renxingsong.cn/data/business_file/1528727816220229345.jpg',
        suppliers_banner: '',
        suppliers_desc: '上海南极人医疗器械有限公司。专业研发医用人体护托全系列产品，有软护托、硬护托和矫形护托，这些产品适用于原发性骨关节 病、创伤骨关节病变（含软组织创伤、骨折）和变型骨关节病的治疗、康复及预防。公司拥有精湛的医学专家和技术人才，他们具有高深的骨科学、解剖学、关节生 理学、生物力学和教材学的专门知识和丰富的临床经验。 企业宗旨：坚持质量第一，顾客至上，真诚为合作商提供最优良的产品和服务。 企业理念：爱在关怀，健康于你。',
        goods_list: [
          {
            goods_id: 3,
            goods_thumb: 'http://m.renxingsong.cn/images/201807/1532329491799991208.jpg',
            team_price: 19,
            shop_price: 25
          },
          {
            goods_id: 4,
            goods_thumb: 'http://m.renxingsong.cn/images/201807/1532329901215654923.jpg',
            team_price: 19,
            shop_price: 25
          },
          {
            goods_id: 5,
            goods_thumb: 'http://m.renxingsong.cn/images/201807/1532608335602489679.jpg',
            team_price: 0,
            shop_price: 15
          },
          {
            goods_id: 6,
            goods_thumb: 'http://m.renxingsong.cn/images/201807/1532608335602489679.jpg',
            team_price: 0,
            shop_price: 15
          }
        ]
      }]
  })
})
app.use('/api', apiRoutes)
app.listen(8000)

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
