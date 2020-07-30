const webpack = require("webpack")

module.exports = {
  devServer: {
    proxy: {
      '/api/*': {
        target: process.env.BASE_URL || process.env.VUE_APP_BASE_API,
        secure: false,
        changeOrigin: true
      },
      '/uploads/*': {
        target: process.env.BASE_URL || process.env.VUE_APP_BASE_API,
        secure: false,
        changeOrigin: true
      }    
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ]
  }
}
