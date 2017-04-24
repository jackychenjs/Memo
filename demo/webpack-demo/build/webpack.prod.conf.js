const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const friendlyErrorsPlugins = require('friendly-errors-webpack-plugin')

const utils = require('./utils')
const BUILD_CONFIG = require('./config/BUILD.js')
const PATHS_CONFIG = require('./config/PATHS.js')
const WEBPACK_BASE_CONFIG = require('./webpack.base.conf')


var webpackConfig = merge(WEBPACK_BASE_CONFIG, {
	module: {
		loaders: utils.styleLoaders({
			sourceMap: BUILD_CONFIG.build.productionSourceMap,
			extract: true
		})
	},
	devtool: BUILD_CONFIG.build.productionSourceMap ? '#source-map' : false,
	output: {
		path: PATHS_CONFIG.DIST,
		filename: utils.assetsPath('js/[name].[chunkhash].js'),
		chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new ExtractTextPlugin({
			filename: utils.assetsPath('css/[name].[contenthash].css')
		}),
		new OptimizeCSSPlugin(),
		new HtmlWebpackPlugin({
			filename: BUILD_CONFIG.build.index,
			template: PATHS_CONFIG.SRC.pathJoin('index.html'),
			inject: true,
			chunsSortMode: 'dependency'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function (module, count) {
				return (
					module.resource && 
					/\.js$/.test(module.resource) &&
					module.resource.indexOf(
						path.join(__dirname, '../node_modules')
					)  === 0
				)
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			chunks: ['vendor']
		})
	]
});

module.exports = webpackConfig