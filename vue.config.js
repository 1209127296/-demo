module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: ['./src/style/Appvars.scss']
        })
        .end()
    })
    config.plugin("html").tap(args => {
      args[0].minify = false;
      return args;
    });

    config.module.rule('images').test(/\.(png|jpe?g|gif|webp)(\?.*)?$/).use('url-loader').loader('url-loader').tap(options => {
      options.limit = 10000
      return options
    })
  },
  configureWebpack: config => {
    config.resolve.alias.vue$ = 'vue/dist/vue.esm.js'
  }
}
