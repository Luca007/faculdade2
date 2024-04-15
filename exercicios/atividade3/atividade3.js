var fs = require('fs');

// Lê o valor da entrada do arquivo 'stdin'
var input = fs.readFileSync('stdin', 'utf8');
var N = parseFloat(input.replace(',', '.')); // Converte o valor para número, ajustando a vírgula para ponto.

// Define as notas e moedas disponíveis
var notas = [100, 50, 20, 10, 5, 2];
var moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

// Prepara variáveis para armazenar resultados
var quantNotas = new Array(notas.length).fill(0);
var quantMoedas = new Array(moedas.length).fill(0);

// Calcula a quantidade de cada nota
for (var i = 0; i < notas.length; i++) {
    quantNotas[i] = parseInt(N / notas[i]); // Usa divisão inteira
    N = N % notas[i]; // Resto da divisão
}

// Calcula a quantidade de cada moeda
for (var j = 0; j < moedas.length; j++) {
    quantMoedas[j] = parseInt(N / moedas[j]); // Usa divisão inteira
    N = (N % moedas[j]).toFixed(2); // Resto da divisão, mantendo duas casas decimais
}

// Imprime as notas
console.log("NOTAS:");
for (var k = 0; k < notas.length; k++) {
    console.log(`${quantNotas[k]} nota(s) de R$ ${notas[k]},00`);
}

// Imprime as moedas
console.log("MOEDAS:");
for (var l = 0; l < moedas.length; l++) {
    console.log(`${quantMoedas[l]} moeda(s) de R$ ${(moedas[l]).toFixed(2)}`);
}
    