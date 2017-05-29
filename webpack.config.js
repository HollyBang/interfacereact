var path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: {
		app: ["./source/client.js"]
	},
	output: {
		path: path.resolve(__dirname, "./public/"),
		filename: "index.js"
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: 'babel-loader'
		},
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			})
		},
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "public"),
		compress: true,
		inline: true,
		port: 8080
	},
	plugins: [
	new ExtractTextPlugin('app.css'),
	]


};