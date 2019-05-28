const path = require('path');
const pkg = require('./package.json');
const { theme, styles } = require('./styleguide/styles');

const pkgName = pkg.name;
const pkgVersion = pkg.version;

module.exports = {
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.examples.md');
  },
  title: `${pkgName} | ${pkgVersion}`,
  pagePerSection: true,
  sections: [
    {
      name: 'General',
      components: [
        path.resolve(__dirname, 'src/components/button', 'button.jsx'),
      ]
    },
    {
      name: 'Form',
      components: [
        path.resolve(__dirname, 'src/components/input', 'input.jsx'),
      ]
    },
    {
      name: 'Components',
      components: [
        path.resolve(__dirname, 'src/components/loading', 'loading.jsx'),
        path.resolve(__dirname, 'src/components/dialog', 'dialog.jsx'),
      ]
    },
  ],
  theme,
  styles,
  styleguideDir: path.resolve(__dirname, './dist'),
  require: [
    path.join(__dirname, './styleguide/styles.css')
  ],
  webpackConfig: require('./config/webpack.dev.js')
};
