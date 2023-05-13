const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const { EsbuildPlugin } = require('esbuild-loader');
 module.exports = {
  module: {
  rules: [
  {
         // Match js, jsx, ts & tsx files
         test: /\.[jt]sx?$/,
         loader: 'esbuild-loader',
         options: {
           // JavaScript version to compile to
          target: 'es2015',
          // This will make esbuild automatically generate import statements,
					// making the ProviderPlugin unnecesary if used only for "react".
					// Note that this option makes sense only when used in conjuction
					// with React >16.40.0 || >17
					// https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
					jsx: 'automatic',
         }
       }
  ]
},
  resolve: {
    fallback: {
      "fs": false,
      "tls": false,
      "punycode": false,
      "path": false,
      "url": false, 
      "net": false,
      "util": false,
      "dns": false,   
      "child_process": false,
      "os": false,
      "os_browserify": false,
      "zlib": false, 
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
    }
    } ,
   mode: 'development',
   entry: './src/index.jsx' ,
   devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Development',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
  optimization: {
    minimize: false,
		minimizer: [
			// Use esbuild to minify
			new EsbuildPlugin(),
		]
  },
 };