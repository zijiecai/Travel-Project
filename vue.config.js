module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        // changeOrigin: true,
	      // ws: true,
        pathRewrite: {
          //访问静态文件默认会找public，写成 localhost:8080/public/mock/index.json反而会请求不到
          // 正确写法 localhost:8080/mock/index.json
          '^/api': '/mock'  
        }
      }
    }
  },
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