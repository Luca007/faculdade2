var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim()); // Adicionando trim para remover espaços em branco desnecessários

var N = parseInt(lines.shift()); // Usando parseInt para garantir um número inteiro
var total = 0;
var coelhos = 0;
var ratos = 0;
var sapos = 0;

for (var i = 0; i < N; i++) {
  if (lines[i]) { // Verificando se a linha não está vazia
    var [Amount, Type] = lines[i].split(' '); // Separando a quantidade do tipo de animal
    Amount = parseInt(Amount); // Garantindo que a quantidade é um número inteiro
    total += Amount;

    switch (Type) {
      case 'C':
        coelhos += Amount;
        break;
      case 'R':
        ratos += Amount;
        break;
      case 'S':
        sapos += Amount;
        break;
    }
  }
}

// Cálculos dos percentuais
var percentualCoelhos = (coelhos / total) * 100;
var percentualRatos = (ratos / total) * 100;
var percentualSapos = (sapos / total) * 100;

// Impressão dos resultados
console.log('Total: ' + total + ' cobaias');
console.log('Total de coelhos: ' + coelhos);
console.log('Total de ratos: ' + ratos);
console.log('Total de sapos: ' + sapos);
console.log('Percentual de coelhos: ' + percentualCoelhos.toFixed(2) + '%');
console.log('Percentual de ratos: ' + percentualRatos.toFixed(2) + '%');
console.log('Percentual de sapos: ' + percentualSapos.toFixed(2) + '%');
