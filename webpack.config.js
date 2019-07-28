const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';


module.exports = {

  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './bundle.js'
  },
	// Tells the server where to serve the content from
	devServer: {
		contentBase: './dist'
	},  
  module: {
    rules: [
			{
	      test: /\.(js|jsx)$/,
	      exclude: /(node_modules)/,
	      use: {
	        loader: 'babel-loader',			// ES6 to ES5
	        options: {
	          presets: ['@babel/preset-env', '@babel/preset-react'],																			// Use react sintax 
	          plugins: ["@babel/plugin-transform-runtime","@babel/plugin-proposal-class-properties"]			// Use async/await, use state = {...}
	        }
	      }
	    },
	    {
	      test: /\.(sa|sc|c)ss$/,
	      use: [
		        {
	            loader: MiniCssExtractPlugin.loader,
	            options: {
	              hmr: process.env.NODE_ENV === 'development',
	            },
	          },
	          // "style-loader", // creates style nodes from JS strings
	          "css-loader", // translates CSS into CommonJS
	          "sass-loader", // compiles Sass to CSS, using Node Sass by default
	      ]
	    },
	    {
	      test: /\.(png|jpe?g|gif)$/,
	      use: [
          {
            loader: 'file-loader?name=[name].[ext]',	// <-- retain original file name
            options: {},
          }
	      ]
	    }
    ]
  },
	plugins: [
		// Connect our html file with out output
		// Inject bundle.js into the html file
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html',
			inject: 'body',
			favicon: 'src/img/paw.png'
		}),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })		
	]  

};