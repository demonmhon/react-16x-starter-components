const path = require('path');
const pkg = path.resolve('package.json');

module.exports = {
  theme: {
    maxWidth: 1200
  },
  styles: {
    body: {
      fontFamily: 'sans-serif !important',
      fontSize: '16px'
    },
    Playground: {
      preview: {
        fontFamily: 'sans-serif !important',
        fontSize: '16px'
      }
    }
  }
};
