var webpack = require('webpack');
var path = require('path');
var ET = require('extract-text-webpack-plugin');
var vendors = require('./vendors.js');

module.exports = {
  entry: {
    index: path.join(__dirname, '/src/scripts/app.js'),
    vendor: vendors
  },
  output: {
    path: __dirname + '/prd',
    filename: "[name].js",
    chunkFilename:'chunkJS/[name].js'
  },
  resolve: {
      alias: {
          'vue$': 'vue/dist/vue.common.js',
          '@': path.join(__dirname, '/src/scripts'),// const index = () => import(/* webpackChunkName: "index" */'@/views/index/index.vue')
      },
  },
  devtool: process.env.NODE_ENV == 'dev' ? '#eval-source-map' : 'false',
  devServer: {  //webpack-dev-server 配置
    contentBase: __dirname + '/prd',
    port: 8000,
    inline: true,
    // hot: true,
    // proxy: {
    //   '/rest/*': {
    //     target: 'http://localhost:8888',
    //     secure: true,
    //     pathRewrite: {
    //       '^/rest': ''
    //     }
    //   }
    // },
    // host:'192.168.1.53',
    historyApiFallback:true  //开发的时候用，生产环境服务器端配置  //当路由使用 history 是设置此项为 true（解决直接跳转子路由返回 404 问题）
  },
  module: {
    rules: [
      {
        test: require.resolve('zepto'),   //将 zepto(amd) 格式转化为 commonjs 格式
        use: [
          'exports-loader?window.Zepto',  //将转化后的 zepto 变量应用到全局对象
          'script-loader'
        ]

      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader',
            'postcss-loader'
        ]
      }, {
        test: /\.scss$/,
        use: ET.extract({
          fallback: "style-loader",
          use: ['css-loader','postcss-loader','sass-loader']
        })
      }, {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: '/images/',
                limit: 1000
            }
        }]
      }
    ]
  },
  plugins: [
    // new webpack.ProvidePlugin({   //自动加载模块，前提有该模块
    //   $: "zepto",
    //   _: 'lodash'
    // }),
    new webpack.optimize.CommonsChunkPlugin({   //公共模块单独打包成 vendor 文件
        name: ["vendor"],
        minChunks: Infinity // 提取所有entry共同依赖的模块
    }),
    new webpack.DefinePlugin({  //挂载全局变量
        'process.env.NODE_ENV': process.env.NODE_ENV == 'dev' ? '"development"' : '"production"'
    }),
    new ET('main.css'),
    // new webpack.optimize.UglifyJsPlugin({}), //代码压缩
  ],
  // watch: true
}
