const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, './build'),
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
				test: /\.ts?$/,
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
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				exclude: /\.module.(scss)$/,
				use: ['css-loader', 'sass-loader'],
			},
			{
				test: /\.module\.scss$/i,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: {
								mode: 'local',
								localIdentName: 'vv-[local]-[hash:base64:5]',
							},
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					name: './images/[name].[ext]',
				},
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './svg/[name].[ext]',
						},
					},
				],
			},
			{
				type: 'javascript/auto',
				test: /\.json$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './json/[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './fonts/[name].[ext]',
						},
					},
				],
			},
		],
	},
	devServer: {
		open: true,
		hot: true,
		historyApiFallback: true,
		port: 8001,
		static: './build',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
		},
	},
	// optimization: {
	// 	minimize: true,
	// 	minimizer: [
	// 		new TerserPlugin({
	// 			parallel: 4,
	// 			extractComments: false,
	// 		}),
	// 	],
	// 	splitChunks: {
	// 		cacheGroups: {
	// 			default: false,
	// 			vendors: false,
	// 			// Vendor chunk
	// 			vendor: {
	// 				// Name of the chunk
	// 				name: 'vendor',
	// 				// Async + async chunks
	// 				chunks: 'all',
	// 				// Import file path containing node_modules
	// 				test: /node_modules/,
	// 				priority: 20,
	// 			},
	// 			common: {
	// 				name: 'common',
	// 				minChunks: 2,
	// 				chunks: 'all',
	// 				priority: 10,
	// 				reuseExistingChunk: true,
	// 				enforce: true,
	// 			},
	// 		},
	// 	},
	// },
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve('public/index.html'),
			filename: './index.html',
			chunksSortMode: 'none',
		}),
	],
}
