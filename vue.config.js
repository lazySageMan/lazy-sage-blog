module.exports = {
    chainWebpack: config => {
        const md = config.module.rule('md');
        md.uses.clear()
        md.test(/\.md$/)
          .use('text-loader')
          .loader('text-loader')
    },
    css: {
        modules: true
    }
}