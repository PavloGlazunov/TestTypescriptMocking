const path = require('path');
const tsAutoMockTransformer = require('ts-auto-mock/transformer').default;

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    getCustomTransformers: program => {
                        return ({
                            before: [
                                tsAutoMockTransformer(program)
                            ]
                        })
                    }
                }
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
};