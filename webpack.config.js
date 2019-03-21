const webpack = require('webpack')
const styleLoaders = ()=>{
    const loaders = [
        require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
            }
        }
    ]
    return loaders;

}

module.exports ={
    entry: [require.resolve("babel-polyfill"),'./src/index.js'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:[{
                    loader: "babel-loader",
                    options: {
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }]
            },
            {
                test: /\.css$/,
                use: styleLoaders(),
            },
        ]
    },
    resolve: {
        extensions: ['*','.js','.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: "/",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
}