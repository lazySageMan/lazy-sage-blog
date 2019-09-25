module.exports = {
    chainWebpack: config => {
        const md = config.module.rule('md');
        md.uses.clear();
        md.test(/\.md$/)
            .use('text-loader')
            .loader('text-loader');
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#1DA57A',
                    'link-color': '#1DA57A',
                    'border-radius-base': '2px',
                },
                javascriptEnabled: true
            }
        }
    },
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static'
};