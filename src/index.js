import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import './scss/styles.scss';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

// Check if hot reloading is enable. If it is, changes won't reload the page.
// This is related to webpack-dev-server and works on development only.
if (module.hot) {
  module.hot.accept();
}
