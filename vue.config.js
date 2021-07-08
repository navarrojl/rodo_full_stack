module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      "^/api/": {
        target: "http://localhost:4000",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api/': ''
        }
      },
    }
  }
}
