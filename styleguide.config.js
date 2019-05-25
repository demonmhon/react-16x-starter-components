const path = require('path');
const pkg = require('./package.json');

const pkgName = pkg.name;
const pkgVersion = pkg.version;

module.exports = {
  title: `${pkgName} | ${pkgVersion}`,
  pagePerSection: true,
  webpackConfig: require('./config/webpack.common.js')
};
