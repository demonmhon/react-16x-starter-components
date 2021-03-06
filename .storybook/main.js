const webpackConfig = require('../config/webpack.dev.js');

module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/preset-scss'],
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: webpackConfig.module.rules },
    };
  },
};
