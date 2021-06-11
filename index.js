const { name } = require('./package.json');

console.log(' packagename', name)

module.exports = require(`./dist/${name}.js`);
