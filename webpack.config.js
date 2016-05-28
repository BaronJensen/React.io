var webpack = require('webpack');
var path = require('path')

module.exports = 
{
	devtool: 'inline-source-map',
	// Step 1: Source Maps
	// devtool: 'cheap-module-source-map', or eval

	entry:[
		//'webpack-dev-server/client?http://127.0.0.1:8080/',
		//'webpack/hot/only-dev-server',
		'./src'
		],
		output:
		{
			path:path.join(__dirname,'public'),
			filename: 'bundle.js'
		},
		resolve:
		{
			modulesDirectories: ['node_modules','src', 'basic_modules'],
			extensions: ['','.js','.jsx']
		},
		module:
		{
			loaders:[{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders:['react-hot','babel?presets[]=react,presets[]=es2015']
			}]
		},
		// Step 2: Node environment
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production')
  //     }
  //   })
  // ],
		plugins:[
			  new webpack.HotModuleReplacementPlugin(),
        	  new webpack.NoErrorsPlugin(),
		]

}