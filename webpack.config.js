var webpack = require('webpack');
var path = require('path');
var ET = require('extract-text-webpack-plugin');
var vendors = require('./vendors.js');
var zipWebpackPlugin = require('zip-webpack-plugin');
var macIp = require('os').networkInterfaces().en0[0].address;

var plugins = [],
    publicPath = '/';
if(process.env.NODE_ENV == 'production') {
    plugins.push(new zipWebpackPlugin({  //代码打包成压缩包
        path: 'zip',
        filename: 'vueJs.zip',
        pathPrefix: 'vueJs',
    }));
};

module.exports = {
	entry: {
		index: path.join(__dirname, '/src/scripts/app.js'),
		vendor: vendors
	},
	output: {
		path: __dirname + '/prd',
		filename: "[name].js",
        publicPath: '/', //使用嵌套子路由时 history 模式下，直接刷新子路由将 js 路径改为根路径
		chunkFilename: 'chunkJS/[name].js'
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js',
			'@': path.join(__dirname, '/src/scripts'), // const index = () => import(/* webpackChunkName: "index" */'@/views/index/index.vue')
		},
	},
	devtool: process.env.NODE_ENV == 'development' ? '#eval-source-map' : 'false',
	devServer: { //webpack-dev-server 配置
		contentBase: [
            path.join(__dirname + '/prd'),
            path.join(__dirname + '/src'),  //devserver 的时候不会将静态图片部署到服务器
        ],
		port: 8000,
		inline: true,
		hot: true, // 启用 webpack 的 模块热替换 功能  -->  热更新不会刷新页面，不启动会刷新当前页
		proxy: {
		  '/api': {
		    target: 'https://m.modian.com',
		    secure: true,  // 允许 https
            changeOrigin: true,  // 允许跨域
		  }
		},
		overlay: false, // 如果代码出错，会在浏览器页面弹出“浮动层”。类似于 vue-cli 等脚手架
		https: false, //默认使用 http，可以修改为 https
		// open: true, //自动打开浏览器
		host: macIp, //ip 打开 ip为当前主机网络 ip
		historyApiFallback: true, //开发的时候用，生产环境服务器端配置  //当路由使用 history 是设置此项为 true（解决直接跳转子路由返回 404 问题）
	},
	module: {
		rules: [{
			test: require.resolve('zepto'), //将 zepto(amd) 格式转化为 commonjs 格式
			use: [
				'exports-loader?window.Zepto', //将转化后的 zepto 变量应用到全局对象
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
				use: ['css-loader', 'postcss-loader', 'sass-loader']
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
                    publicPath: '',
                    limit: 1000
                }
            }]
		}]
	},
	plugins: [
		// new webpack.ProvidePlugin({   //自动加载模块，前提有该模块
		//   $: "zepto",
		//   _: 'lodash'
		// }),
		new webpack.HotModuleReplacementPlugin(), // 启用热替换模块(Hot Module Replacement)，也被称为 HMR。
		new webpack.optimize.CommonsChunkPlugin({ //公共模块单独打包成 vendor 文件
			name: ["vendor"],
			minChunks: Infinity // 提取所有entry共同依赖的模块
		}),
		new webpack.DefinePlugin({ //挂载全局变量
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new ET('css/main.css'),
		// new webpack.optimize.UglifyJsPlugin({}), //代码压缩
        ...plugins
	],
	// watch: true
}