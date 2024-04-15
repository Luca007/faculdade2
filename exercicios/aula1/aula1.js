var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());

var media = (A * 3.5 + B * 7.5) / 11.0;

console.log("Média = " + media.toFixed(5));