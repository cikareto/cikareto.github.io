const isProd = process.env.NODE_ENV === 'production'

const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

const config = {
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/cikareto/cikareto.github.io/gh-pages/' : '/',
};

module.exports = withCSS(withImages(config));