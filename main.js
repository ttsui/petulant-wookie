var fs = require('fs');
var program = require('./program');

var filename = process.argv[2];

var file = fs.readFileSync(filename).toString().split('\n');

var result = program.combineDateLinesWithNonDateLine(file);

var i;
for (i=0; i < result.length; i++) {
  console.log(program.groupIntoColumns(result[i]));
}
