import '!style-loader!css-loader!sass-loader!../src/scss/styles.scss';
import { themes } from '@storybook/theming';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    darkClass: 'color-mode-dark',
    lightClass: 'color-mode-light',
    stylePreview: true
  }
}
export const tags = ['autodocs'];
