const path = require('path');

// The webpack config is setting up our entry (index.js)
// and our output of the bundling process (bundle.js in public folder)

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.join(__dirname, './server/public'),
		filename: 'bundle.js',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: ['babel-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './server/public',
	},
};
