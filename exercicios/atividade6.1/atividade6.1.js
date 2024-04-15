var input = require('fs').readFileSync('stdin', 'utf8');
var N = Number(input.trim());

for (var i = 1; i <= 10000; i++) {
  if (i % N === 2) {
    console.log(i);
  }
}
