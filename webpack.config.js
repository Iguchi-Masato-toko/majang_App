const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPkugin = require('webpack-fix-style-only-entries');
module.exports = {
    mode:"development",
    entry:{
        'index':path.resolve(__dirname,'./js/index.js'),
        'style':path.resolve(__dirname,'./sass/iii.scss')
    },
    output: {
        path: path.resolve(__dirname,'./dist/'),
        filename:"js/[name].js",
    },
    module: {
        rules: [
            {
                test:/\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new FixStyleOnlyEntriesPkugin(),
        new MiniCssExtractPlugin({
            filename:"css/[name].css"
        }),
    ]
};