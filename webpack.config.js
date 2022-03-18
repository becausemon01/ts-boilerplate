const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: [path.resolve('src/index.tsx')],
	mode: 'development',
	devtool: 'cheap-module-source-map',
	output: {
		path: path.resolve('build'),
		filename: '[name].js',
		chunkFilename: '[name].js',
		publicPath: '/',
		crossOriginLoading: 'anonymous',
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './public/assets'),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
				],
			},
		],
	},
	devServer: {
		open: false,
		hot: true,
		historyApiFallback: true,
		port: 8001,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
		},
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve('public/index.html'),
			filename: './index.html',
			chunksSortMode: 'none',
		}),
	],
}
