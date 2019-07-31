# REACT.IO

Framework that implements react and sockets io.


1.git clone https://github.com/Jeelbale/React.io.git

2.npm install

-Edit the webpack.confing for:

===

Develompent:

```javascript 
var webpack = require('webpack');
var path = require('path')

module.exports = 
{
	devtool: 'inline-source-map',
	entry:[
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src'
		],
		output:
		{
			path:path.join(__dirname,'public'),
			filename: 'bundle.js'
		},
		resolve:
		{
			modulesDirectories: ['node_modules','src'],
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
		plugins:[
			  new webpack.HotModuleReplacementPlugin(),
        	  new webpack.NoErrorsPlugin(),
		]
}```


2.2.Run webpack-dev-server

===


Production(you find your bundle at public/bundle.js):
```javascript 
module.exports = 
{
	devtool: 'cheap-module-source-map',
	entry:[
		'./src'
		],
		output:
		{
			path:path.join(__dirname,'public'),
			filename: 'bundle.js'
		},
		resolve:
		{
			modulesDirectories: ['node_modules','src'],
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
		
		plugins:[
			  new webpack.HotModuleReplacementPlugin(),
        	  new webpack.NoErrorsPlugin(),
        	  new webpack.DefinePlugin({
							 'process.env': {
						 		'NODE_ENV': JSON.stringify('production')
							 }
							 })
      			]

}```

2.2.Run webpack --progress -p


***********************************************



[Jensen Baronville]Jensen Baronville
