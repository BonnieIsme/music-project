const path = require('path')

const config = {
  projectName: 'my-music',
  date: '2021-8-7',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },

  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
      { from:'src/assets/icons/',to:'dist/assets/icons/'},
      { from:'src/assets/images/',to:'dist/assets/images/'}
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    esnextModules: ['taro-ui']
  },
  alias:{
    '@api':path.resolve(__dirname, '..' ,'src/api'),
    '@assets':path.resolve(__dirname, '..', 'src/assets'),
    '@components':path.resolve(__dirname,'..','src/components'),
    '@actions':path.resolve(__dirname,'..','src/actions'),
    '@config':path.resolve(__dirname,'..','src/config'),
    '@constants':path.resolve(__dirname,'..','src/constants'),
    '@data':path.resolve(__dirname,'..','src/data'),
    '@pages':path.resolve(__dirname,'..','src/pages'),
    '@reducers':path.resolve(__dirname,'..','src/reducers'),
    '@style':path.resolve(__dirname,'..','src/style'),
    '@utils':path.resolve(__dirname,'..','src/utils'),
    '@packageLogin':path.resolve(__dirname,'..','src/packageLogin'),
    '@mixins':path.resolve(__dirname,'..','src/mixins'),

  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
