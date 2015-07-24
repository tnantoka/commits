var fs = require('fs');

var builder = require('./src/js/index_builder');
var idx = builder.build();
var json = JSON.stringify(idx, null, 2);

try {
  fs.unlinkSync('./src/js/commits.js');
} catch(e) {
}
fs.writeFileSync('./src/js/commits.js', 'module.exports = ' + json + ';\n');

