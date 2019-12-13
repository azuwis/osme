var merge = require('webpack-merge')
var webpack = require('webpack')
var path = require('path')
var common = require('./webpack.common.js')
var Cleaner = require('clean-webpack-plugin')

var pathsToClean = [
    'dist/**',
    'build/**'
]

module.exports = merge(common, {
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'osme',
        libraryTarget: 'umd'
    },
    mode: 'production',
    optimization: {
        minimize: true
    },
    plugins: [
        // build optimization plugins
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: true
        }),
        new Cleaner(pathsToClean, { verbose: true, dry: false })
    ]
})
