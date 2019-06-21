const utils = require('./build/utils')
const merge = require('webpack-merge')

module.exports = {
  webpackConfig: merge(require('./build/webpack.base.conf'), {
    module: {
      rules: utils.styleLoaders(),
    },
  }),
  components: 'src/components/**/[A-Z]*.vue',
}
