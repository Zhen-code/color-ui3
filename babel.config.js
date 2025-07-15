module.exports = {
    presets: [
        "@babel/preset-typescript", 
        '@babel/preset-env',// 解析ts语法，在采用preset-env
    ],
    overrides: [{
        test: /\.vue$/,
        plugins: [ // ?
            '@babel/transform-typescript',
        ],
    }],
    env: {
        utils: {
            plugins: [ // ?
                [
                    'babel-plugin-module-resolver', // 为了能正确找到color-ui3模块
                    { root: 'color-ui3' }
                ]
            ]
        }
    }
}