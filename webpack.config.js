var path = require("path");
//console.log(__dirname)
module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + '/dist',
        publicPath: "/dist",
        filename: "main.js"
    },
    //devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, '/'),
        port: 8080,
        //inline: true,
        //hot: true
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        //presets: ["@babel/preset-env"],
                        plugins: [
                            ["@babel/plugin-transform-react-jsx"],
                            ["@babel/plugin-proposal-class-properties"],
                            ["@babel/plugin-proposal-object-rest-spread"]
                        ]
                    }
                },

                exclude: [/node_modules/, /public/],
            },
            {
                test: /.\sass$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'auto-prefixer' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {

                        loader: 'css-loader',
                        /*
                        options: {
                            //sourceMap: true,
                            //modules: true,
                            localIdentName: "[path]/[name].[ext]"
                        }
                        */
                    },
                    { loader: 'auto-prefixer' }
                ],
                //loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'auto-prefixer' },
                    { loader: 'less-loader' }
                ],
                //loader: "style-loader!css-loader!autoprefixer-loader!less-loader",
                exclude: [/node_modules/, /public/]
            },

            {
                test: /\.(jpe?g|gif|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "/src/images/[name].[ext]"
                        }

                    },
                    /*
                    {
                        loader: "url-loader",
                        //name: "src/view/images/[name].[ext]"
                    }
                    */
                ]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            }
        ]
    }
};
`~`