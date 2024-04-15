var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Processa a primeira linha de entrada
var primeiraLinha = lines[0].split(' ');
var codigoProduto1 = parseInt(primeiraLinha[0], 10);
var numeroUnidades1 = parseInt(primeiraLinha[1], 10);
var precoUnidade1 = parseFloat(primeiraLinha[2].replace(',', '.'));

// Processa a segunda linha de entrada
var segundaLinha = lines[1].split(' ');
var codigoProduto2 = parseInt(segundaLinha[0], 10);
var numeroUnidades2 = parseInt(segundaLinha[1], 10);
var precoUnidade2 = parseFloat(segundaLinha[2].replace(',', '.'));

// Calcula o valor total a pagar
var valorTotal = (numeroUnidades1 * precoUnidade1) + (numeroUnidades2 * precoUnidade2);

// Exibe o resultado formatado
console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);
