module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss', '@storybook/addon-postcss', 'storybook-dark-mode'],
  core: {
    builder: "webpack5"
  }
};