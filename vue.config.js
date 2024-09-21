const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            fallback: {
                "zlib": false,
                "path": false,
                "fs": false,
                "stream": require.resolve("stream-browserify")
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.sandbox.africastalking.com',
                changeOrigin: true,
                pathRewrite: { '^/api': '' }
            }
        }
    }
});


  
