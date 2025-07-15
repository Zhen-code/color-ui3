const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../packages/index.ts'),
    output: {
        path: path.resolve(__dirname, './lib'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'color-ui3',
    },
    externals: { // 排除vue打包
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
        },
    },
    module: {
        rules: [{ // 识别vue
            test: /\.vue$/,
            use: 'vue-loader',
        },
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
            options: {
                appendTsSuffixTo: [/\.vue$/], // 关键：让 ts-loader 处理 Vue 中的 TS
            }
        },
        { // 识别tsx
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        { // 识别图标...
            test: /\.(svg|otf|ttf|woff|eot|gif|png)$/,
            loader: 'url-loader',
        },
        { // 识别样式
            test: /\.(scss|css)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}