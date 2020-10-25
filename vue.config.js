module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 配置别名
        'assets': '@/assets',
        'components': '@/components',
        'pages': '@/pages'
      }
    }
  }
}