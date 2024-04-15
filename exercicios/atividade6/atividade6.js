var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var pares = 0;
var impares = 0;
var positivos = 0;
var negativos = 0;

for (var i = 0; i < 5; i++) {
  var numero = Number(lines[i]);

  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }

  if (numero > 0) {
    positivos++;
  } else if (numero < 0) {
    negativos++;
  }
}

console.log(pares + ' valor(es) par(es)');
console.log(impares + ' valor(es) impar(es)');
console.log(positivos + ' valor(es) positivo(s)');
console.log(negativos + ' valor(es) negativo(s)');
