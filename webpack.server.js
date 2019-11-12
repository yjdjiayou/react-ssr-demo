const path = require('path');
const nodeExternal = require('webpack-node-externals');
const merge = require('webpack-merge');
const base = require('./webpack.base');
module.exports = merge(base,{
    target:'node',//告诉webpack打包的node环境的文件
    entry:'./src/server/index.js',
    output:{
        path:path.resolve('build'),
        filename:'server.js'
    },
    externals:[nodeExternal()],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'isomorphic-style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    }
                ]
            }
        ]
    }
});