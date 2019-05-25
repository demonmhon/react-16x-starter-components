const path = require('path');
const pkg = require('./package.json');

const pkgName = pkg.name;
const pkgVersion = pkg.version;

module.exports = {
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.examples.md')
  },
  title: `${pkgName} | ${pkgVersion}`,
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  webpackConfig: require('./config/webpack.dev.js')
};
