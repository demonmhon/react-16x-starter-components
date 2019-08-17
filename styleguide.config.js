const dotenv = require('dotenv').config();
const path = require('path');
const pkg = require('./package.json');
const { theme, styles } = require('./styleguide/styles');

const pkgName = pkg.name;
const pkgVersion = pkg.version;

module.exports = {
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.examples.md');
  },
  serverPort: parseInt(process.env.PORT, 10) || 6060,
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
      sections: [
        {
          name: 'Input',
          components: [
            path.resolve(__dirname, 'src/components/input', 'input.jsx'),
            path.resolve(__dirname, 'src/components/input', 'input-password.jsx'),
            path.resolve(__dirname, 'src/components/input', 'input-textarea.jsx'),
          ]
        },
        {
          name: 'Checkbox',
          components: [
            path.resolve(__dirname, 'src/components/checkbox', 'checkbox.jsx')
          ]
        }
      ]
    },
    {
      name: 'Components',
      components: [
        path.resolve(__dirname, 'src/components/loading', 'loading.jsx'),
        path.resolve(__dirname, 'src/components/dialog', 'dialog.jsx'),
        path.resolve(__dirname, 'src/components/table', 'table.jsx'),
        path.resolve(__dirname, 'src/components/pagination', 'pagination.jsx'),
      ]
    },
  ],
  theme,
  styles,
  styleguideDir: path.resolve(__dirname, './dist'),
  require: [
    path.join(__dirname, './styleguide/styles.scss')
  ],
  webpackConfig: require('./config/webpack.dev.js')
};
