const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		publicPath: '/',
	},
	devtool: 'source-map',
	devServer: {
        historyApiFallback: true,
    },
	module: {
		rules: [
			{ test: /\.js$/, use: {loader: 'babel-loader'} },
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
		} 
	}
}